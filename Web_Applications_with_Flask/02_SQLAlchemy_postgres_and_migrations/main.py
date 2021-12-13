from flask import Flask, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://postgres:manushev@localhost:5433/store'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api = Api(app)


class BookModel(db.Model):
    __tablename__ = 'books'

    pk = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    reader_pk = db.Column(db.Integer, db.ForeignKey('readers.pk'))

    def __str__(self):
        return f'pk: {self.pk} Title: {self.title} Author: {self.author}'

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class ReaderModel(db.Model):
    __tablename__ = 'readers'

    pk = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)

    def serialize(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class Books(Resource):
    def get(self):
        books = BookModel.query.all()
        return {'books': [b.serialize() for b in books]}

    def post(self):
        data = request.get_json()
        book = BookModel(**data)
        db.session.add(book)
        db.session.commit()
        return {'message': 'created'}, 201


api.add_resource(Books, '/books')
db.create_all()

if __name__ == '__main__':
    app.run()
