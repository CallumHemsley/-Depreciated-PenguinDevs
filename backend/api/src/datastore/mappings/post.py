from sqlalchemy import Table, Column, Integer, String, LargeBinary
from models import Post
def post_mapping(meta):
    post_table = Table('post', meta,
        Column('id', Integer, primary_key=True),
        Column('title', String(255), nullable=False, unique=True), 
        Column('category', String(255), nullable=False, unique=False),
        Column('excerpt', String(255), nullable=False),
        Column('image', LargeBinary, nullable=True),
        Column('views', Integer, nullable=True),
        Column('body', String, nullable=False),
        Column('date', String(255), nullable=False))
    return (Post, post_table)