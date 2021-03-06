from flask import Flask, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from decouple import config

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{config("DB_USER")}:{config("DB_PASSWORD")}' \
                                        f'@localhost:{config("DB_PORT")}/{config("DB_NAME")}'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api = Api(app)


class BookModel(db.Model):
    __tablename__ = 'books'

    pk = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    reader_pk = db.Column(db.Integer, db.ForeignKey('readers.pk'))
    reader = db.relationship('ReaderModel')

    def __str__(self):
        return f'pk: {self.pk} Title: {self.title} Author: {self.author}'

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class ReaderModel(db.Model):
    __tablename__ = 'readers'

    pk = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    books = db.relationship('BookModel', backref='book', lazy='dynamic')

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class Books(Resource):
    @staticmethod
    def get():
        books = BookModel.query.all()
        return {'books': [b.serialize() for b in books]}

    @staticmethod
    def post():
        data = request.get_json()
        book = BookModel(**data)
        db.session.add(book)
        db.session.commit()
        return {'message': 'created'}, 201


class Readers(Resource):
    def get(self):
        readers = ReaderModel.query.all()
        return {'readers': [r.serialize() for r in readers]}


api.add_resource(Books, '/books')
api.add_resource(Readers, '/readers')
db.create_all()

if __name__ == '__main__':
    app.run()
