from flask_restful import Resource, reqparse, marshal_with, fields
from http import HTTPStatus

from models  import Post

#what data to render in response.
post_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'body': fields.String,
}
post_parser = reqparse.RequestParser() #kind of like validation, with extra stuff that can be nice.
post_parser.add_argument('id', type=int, required = False)
post_parser.add_argument('title', type=str, required=True) #limit characters for title.
post_parser.add_argument('body', type=str, required=True)

class PostsResource(Resource): #resource contains all the shit u need to get, post etc.
    def __init__(self, store):
        self.session = store.session #constructor passing from the kwargs thing in main.

    @marshal_with(post_fields) #apply field filtering.
    def get(self):
        return self.session.query(Post).all()
    
    @marshal_with(post_fields)
    def post(self):
        args = post_parser.parse_args()

        by_title = (Post.title == args['title'])
        post = self.session.query(Post).filter(by_title).first()
        if post:
            post.title = args['title']
            status = HTTPStatus.OK
        else:
            post = Post(**args)
            self.session.add(post)
            status = HTTPStatus.CREATED

        self.session.commit()  

        return post, status   
