from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

books = ['a', 'b', 'c']


class Books(Resource):
    def get(self):
        return books

    def post(self):
        books.append('d')
        return books


api.add_resource(Books, '/books')

if __name__ == '__main__':
    app.run()
