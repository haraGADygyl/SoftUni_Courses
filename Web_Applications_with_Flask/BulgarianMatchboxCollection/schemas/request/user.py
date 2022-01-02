from marshmallow import Schema, fields, validate


class BaseUserSchema(Schema):
    email = fields.Email(required=True)
    password = fields.String(required=True, validate=validate.Length(min=6, max=32))


class UserRegisterRequestSchema(BaseUserSchema):
    first_name = fields.String(required=True, validate=validate.Length(min=2, max=32))
    last_name = fields.String(required=True, validate=validate.Length(min=2, max=32))
