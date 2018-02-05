from flask_restful import Resource, reqparse, marshal_with, fields, abort
from http import HTTPStatus

from models  import Post

#what data to render in response.
post_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'body': fields.String,
}
post_parser = reqparse.RequestParser() #kind of like validation, with extra stuff that can be nice.
post_parser.add_argument('id', type=int, required = True)
post_parser.add_argument('title', type=str, required=True) #limit characters for title.
post_parser.add_argument('body', type=str, required=True)

class PostResource(Resource): #resource contains all the shit u need to get, post etc.
    def __init__(self, store):
        self.session = store.session #constructor passing from the kwargs thing in main.

    @marshal_with(post_fields) #apply field filtering.
    def get(self, post_id):
        by_id = (Post.id == post_id)
        post = self.session.query(Post).filter(by_id).first()
        if post:
            return post
        else:
            abort(404, message="Post {} doesn't exist".format(post_id)) 