from flask_restful import Resource, reqparse, marshal_with, fields
from http import HTTPStatus
import werkzeug
import psycopg2
from models  import Post
import base64
#what data to render in response.
post_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'category': fields.String,
    'image': fields.String,
    'body': fields.String,
    'excerpt': fields.String,
    'views': fields.Integer,
    'date': fields.String,
}
post_parser = reqparse.RequestParser() #kind of like validation, with extra stuff that can be nice.
#post_parser.add_argument('id', type=int, required = True)
post_parser.add_argument('title', type=str, required=True) #limit characters for title.
post_parser.add_argument('category', type=str, required=True)
post_parser.add_argument('image', type=werkzeug.FileStorage, required = False, location='files')
post_parser.add_argument('excerpt', type=str, required=True)
post_parser.add_argument('body', type=str, required=True)
post_parser.add_argument('views', type=int, required=False)
post_parser.add_argument('date', type=str, required=True)
#post_parser.add_argument('tokenid', type=str, required=False)

class PostsResource(Resource): #resource contains all the shit u need to get, post etc.
    def __init__(self, store):
        self.session = store.session #constructor passing from the kwargs thing in main.

    @marshal_with(post_fields) #apply field filtering.
    def get(self):
        return self.session.query(Post).order_by(Post.date).all()
    
    @marshal_with(post_fields)
    def post(self):
        #args = post_parser.parse_args()
        #print(args['tokenid'])
        #F = open('./src/resources/token.txt', 'r')
        #if (args['tokenid'] in (F.read())):
            #post_parser.remove_argument('tokenid')
        args = post_parser.parse_args()


<<<<<<< HEAD
            by_title = (Post.title == args['title'])
            post = self.session.query(Post).filter(by_title).first()
            if post:
                post.title = args['title']
                status = HTTPStatus.OK
            else:
                post = Post(**args)
                if args['image'] is not None:
                    post.image = post.image.read()
                #post.image = base64.urlsafe_b64encode(post.image)
                post.views = 0
                self.session.add(post)
                status = HTTPStatus.CREATED
=======
        by_title = (Post.title == args['title'])
        post = self.session.query(Post).filter(by_title).first()
        if post:
            post.title = args['title']
            status = HTTPStatus.OK
        else:
            post = Post(**args)
            if post.image is not None:
                post.image = post.image.read()
            #post.image = base64.urlsafe_b64encode(post.image)
            post.views = 0
            self.session.add(post)
            status = HTTPStatus.CREATED
>>>>>>> c9b584e12c168da4c382bbdcecd5761a75100a86

        self.session.commit()  
            #post_parser.add_argument('tokenid', type=str, required=False)
            return post, status
        return "no"  
