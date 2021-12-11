# from flask import Flask, request
# from flask_restful import Resource, Api
# from flask_sqlalchemy import SQLAlchemy
#
# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://postgres:manushev@localhost:5433/store'
# db = SQLAlchemy(app)
# api = Api(app)
#
#
# class BookModel(db.Model):
#     __tablename__ = 'books'
#
#     pk = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(255), nullable=False)
#     author = db.Column(db.String(255), nullable=False)
#
#
# class Books(Resource):
#     def post(self):
#         data = request.data
#
#
# api.add_resource(Books, '/books')
#
#
# if __name__ == '__main__':
#     app.run()