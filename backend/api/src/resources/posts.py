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
post_parser.add_argument('tokenid', type=str, required=False)

class PostsResource(Resource): #resource contains all the shit u need to get, post etc.
    def __init__(self, store):
        self.session = store.session #constructor passing from the kwargs thing in main.

    @marshal_with(post_fields) #apply field filtering.
    def get(self):
        return self.session.query(Post).all()
    
    @marshal_with(post_fields)
    def post(self):
        args = post_parser.parse_args()
        if (args['tokenid'] == 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5UUTBOVFk0T1VaQlF6QXlNek15TWpoRk9UZ3dOMEZCUlRCQ1F6SXlRems1UmtJeU1EVkVNZyJ9.eyJnaXZlbl9uYW1lIjoiQ2FsbHVtIiwiZmFtaWx5X25hbWUiOiJIZW1zbGV5Iiwibmlja25hbWUiOiJjdGhlbXNsZXkiLCJuYW1lIjoiQ2FsbHVtIEhlbXNsZXkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy0tcU9Gazh0dWIxRS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQW5uWTdxOGtVUFBpcmpOeVRCSWtkZ3Qyemt3R2laUG1BL21vL3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMDgtMThUMTA6NTM6MjkuMjc4WiIsImlzcyI6Imh0dHBzOi8vcGVuZ3VpbmRldnMuZXUuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEzMzYyOTU3MTAyMzcyODQwNjMwIiwiYXVkIjoibnBVVWd1VWlOaTdFWXd5RUFSNDhwYzhPcEsxSHFOUGEiLCJpYXQiOjE1MzQ1ODk2MDksImV4cCI6MTUzNDYyNTYwOSwiYXRfaGFzaCI6IjJ5cy1vWHpLaGRGY1dUX1pJVlRROVEiLCJub25jZSI6IkVVRmRUMEo0RnlLSlFKT3pGQUFST2l1bUF2UllKczBVIn0.RM-5zvzwRPT93D4G_nbSnodryGmjuWC_iVavQrS4_zPUH9xQ5gBw5ngVHmNbmtR_e4c4hUPVhffb4IAY9UH715KI7mgPN_BXuUsoaJJQ9s5tCnaWDcdPKvnqlAmvTM2y6UNIxiZy9HVsQeiXsqkhcEx34Iw9-J6HuWoK2JOV7MstYKlO2ED63QqwB95c1PtT7tO3PI0EvTbkPfpbe3wVwMIP7VB5oaaiUGzP5K35uerpfjkt-eaOyd6mGZLp5FzBULwrEuJbXXORvOYCOfCgd70RGrwy9OAO1GJQ_fszRGobamx2dG8jRSK1kELSOav6TnsLhFMPaIJj7ryMyijHdg'):
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

            self.session.commit()  

            return post, status 
        return "no"  
