from flask_restful import Resource, reqparse, marshal_with, fields, abort
from http import HTTPStatus
import werkzeug
from models  import Post
import base64
from io import BytesIO
#what data to render in response.
post_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'category': fields.String,
    'image': fields.String,
    'excerpt': fields.String,
    'body': fields.String,
    'views': fields.Integer,
    'date': fields.String,
}
post_parser = reqparse.RequestParser() #kind of like validation, with extra stuff that can be nice.
post_parser.add_argument('id', type=int, required = True)
post_parser.add_argument('title', type=str, required=True) #limit characters for title.
post_parser.add_argument('category', type=str, required=True)
post_parser.add_argument('image', type=werkzeug.FileStorage, required = False, location='files')
post_parser.add_argument('excerpt', type=str, required=True)
post_parser.add_argument('body', type=str, required=True)
post_parser.add_argument('views', type=int, required=False)
post_parser.add_argument('date', type=str, required=False)

class PostResource(Resource): #resource contains all the shit u need to get, post etc.
    def __init__(self, store):
        self.session = store.session #constructor passing from the kwargs thing in main.

    @marshal_with(post_fields) #apply field filtering.
    def get(self, post_id):
        by_id = (Post.id == post_id)
        post = self.session.query(Post).filter(by_id).first()
        if post:
            post.views += 1
            self.session.commit()
            #check if its bytes because it might already be converted (kept in cache say if page is reloaded and request instantly sent again)
            if(type(post.image) == bytes):
                post.image = base64.encodestring(post.image)
                post.image = post.image.decode('utf-8')
            else:
                return post
            return post
        else:
            abort(404, message="Post {} doesn't exist".format(post_id)) 

    @marshal_with(post_fields)
    def put(self, post_id):
        try:
            args = post_parser.parse_args()
            by_id = (Post.id == post_id)
            post = self.session.query(Post).filter(by_id).first()
            if post:
                post.title = args['title']
                post.category = args['category']
                post.body = args['body']
                post.excerpt = args['excerpt']
                post.image = args['image'].read()


                status = HTTPStatus.CREATED
            else:
                abort(404, message="Post {} doesn't exist".format(post_id))
            self.session.commit()

            return post, status
        except Exception as e:
            print(e)