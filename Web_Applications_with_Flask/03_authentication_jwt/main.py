import enum
from datetime import datetime, timedelta

import jwt

from decouple import config
from flask import Flask, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from marshmallow import Schema, fields, validate, ValidationError
from werkzeug.exceptions import BadRequest
from werkzeug.security import generate_password_hash

app = Flask(__name__)

db_user = config('DB_USER')
db_password = config("DB_PASSWORD")

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{db_user}:{db_password}@localhost:5433/clothes'

db = SQLAlchemy(app)
api = Api(app)
migrate = Migrate(app, db)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    full_name = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.Text)
    create_on = db.Column(db.DateTime, server_default=func.now())
    updated_on = db.Column(db.DateTime, onupdate=func.now())

    def encode_token(self):
        payload = {
            'exp': datetime.utcnow() + timedelta(days=2),
            'sub': self.id
        }
        return jwt.encode(payload, key=config('JWT_KEY'), algorithm='HS256')


class ColorEnum(enum.Enum):
    pink = "pink"
    black = "black"
    white = "white"
    yellow = "yellow"


class SizeEnum(enum.Enum):
    xs = "xs"
    s = "s"
    m = "m"
    l = "l"
    xl = "xl"
    xxl = "xxl"


class Clothes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    color = db.Column(
        db.Enum(ColorEnum),
        default=ColorEnum.white,
        nullable=False
    )
    size = db.Column(
        db.Enum(SizeEnum),
        default=SizeEnum.s,
        nullable=False
    )
    photo = db.Column(db.String(255), nullable=False)
    create_on = db.Column(db.DateTime, server_default=func.now())
    updated_on = db.Column(db.DateTime, onupdate=func.now())


def validate_full_name(value):
    try:
        first_name, last_name = value.split()
    except:
        raise ValidationError('Full name must contain first and last names')


class UserSignUpSchema(Schema):
    email = fields.Email()
    password = fields.String()
    full_name = fields.String(required=True, validate=validate.And(validate.Length(min=2, max=255), validate_full_name))


class SighUp(Resource):
    @staticmethod
    def post():
        data = request.get_json()
        schema = UserSignUpSchema()
        errors = schema.validate(data)
        if not errors:
            try:
                data['password'] = generate_password_hash(password=data['password'], method='sha256')
                user = User(**data)
                db.session.add(user)
                db.session.commit()
            except Exception as ex:
                if 'UniqueViolation' in str(ex):
                    raise BadRequest('This email is already in use')
                raise BadRequest('Invalid data')

            token = user.encode_token()
            return {'token': token}, 201
        raise BadRequest(f'Invalid data fields - {", ".join(errors)}')


api.add_resource(SighUp, '/register')

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
