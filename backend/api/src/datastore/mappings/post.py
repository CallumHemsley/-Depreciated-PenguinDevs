from sqlalchemy import Table, Column, Integer, String
from models import Post
def post_mapping(meta):
    post_table = Table('post', meta,
        Column('id', Integer, primary_key=True),
        Column('title', String(255), nullable=False, unique=True), 
        Column('body', String, nullable=False),)
    return (Post, post_table)