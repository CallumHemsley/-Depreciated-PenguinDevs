from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from os import environ
from resources import PostsResource, PostResource
from datastore import DataStore

def make_datastore():
    return DataStore(environ['DATASTORE_URI']) #return datastore object

def main():
    app = Flask(__name__)
    CORS(app)
    api = Api(app)

    store = make_datastore() #create datastore object.
    store_context = dict(store=store)

    api.add_resource(PostsResource, r'/users/posts', #using 'r' before hand means that it will be treated as a raw string.(done so / left in and not taken out)
        resource_class_kwargs=store_context) #pass through constructor to lossely couple each other. 
        #the value of resource_class_kwargs is forwarded and passed into my resource implementation's constructor. (PostsResource)
        #So i'm injecting the store_context dependency into PostsResource

    api.add_resource(PostResource, r'/users/posts/<int:post_id>',
        resource_class_kwargs=store_context)
    
    debug_mode = environ.get('DEBUG') is not None #bool value

    app.run(
        host='0.0.0.0',
        port=5000,
        debug=debug_mode
    )

if __name__ == "__main__":
    main()