from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import mapper, sessionmaker

from .mappings import all_mappings

class DataStore:
    def __init__(self,uri):
        self.meta = MetaData() #container keeps together different features of db.

        for mapping in all_mappings:
            #cls used instead of self for class methods.
            cls, table = mapping(self.meta)
            mapper(cls, table) #map the python class to thee table in database.
        
        self.engine = create_engine(uri)
        #generates new sessions objects when called, creating them.
        Session = sessionmaker(
            autocommit=False,#session does keep a persistent transaction running.
            autoflush=False,#flush isn't called to session.
            bind=self.engine #sql operations execute via this engine.
        )

        self.session = Session()

    def populate(self):
        self.meta.drop_all(self.engine)
        self.meta.create_all(self.engine) #issue queries that first check for existence of each table, if not creates them.
