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
        print(args['tokenid'])
        if (args['tokenid'] == ("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5UUTBOVFk0T1VaQlF6QXlNek15TWpoRk9UZ3dOMEZCUlRCQ1F6SXlRems1UmtJeU1EVkVNZyJ9.eyJnaXZlbl9uYW1lIjoiQ2FsbHVtIiwiZmFtaWx5X25hbWUiOiJIZW1zbGV5Iiwibmlja25hbWUiOiJjdGhlbXNsZXkiLCJuYW1lIjoiQ2FsbHVtIEhlbXNsZXkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy0tcU9Gazh0dWIxRS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQW5uWTdxOGtVUFBpcmpOeVRCSWtkZ3Qyemt3R2laUG1BL21vL3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMDgtMTlUMDk6MDk6MzUuMDA2WiIsImlzcyI6Imh0dHBzOi8vcGVuZ3VpbmRldnMuZXUuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEzMzYyOTU3MTAyMzcyODQwNjMwIiwiYXVkIjoibnBVVWd1VWlOaTdFWXd5RUFSNDhwYzhPcEsxSHFOUGEiLCJpYXQiOjE1MzQ2Njk3NzUsImV4cCI6MTUzNDcwNTc3NSwiYXRfaGFzaCI6IlZvWFJtdVFqSTJTUDNKZnZCY1RnRnciLCJub25jZSI6Ijk0MlZyd3VGVk1uVnJkWE1palhuTX55b21qZ093dTloIn0.jsqILeWuK5A5NUW3NiV537iym-H9339U6BT5dHzw-Iv8sO_1kzW4WdcF1YUBF_rxFf2_j1-_aZKI4MoRRFxM1BuZHW3z0hWnrHfg2NeXB6OuC1aPLqb3WS8fCCGfk0DAPu_eAlRaajvWBRJbqGMMjg-cWCOTT_w81cLUIdyyriW8oTAF9bft3dh5kLOw3QN_m9YE87aqyFYM6W75e65LezuvfRrEFmAUosEA1L32kKhVFxask7XpottULKhx0sKGbmY36pPEvwwa900wU0HyTGaW6BeWaNfxJZstTlNKjEO0wzKXazUdO_XiIPCN1OaSF3bJ7wD3aYtQjqnXvAlNXQ")):
            post_parser.remove_argument('tokenid')
            args = post_parser.parse_args()
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
