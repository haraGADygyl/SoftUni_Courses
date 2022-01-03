from marshmallow import Schema, fields, validate


class CarCreateRequestSchema(Schema):
    make = fields.String(required=True, validate=validate.Length(max=32))
    model = fields.String(required=True, validate=validate.Length(max=32))
    color = fields.String(required=True, validate=validate.Length(max=32))
    interior_color = fields.String(required=True, validate=validate.Length(max=32))
    tampo = fields.String(required=True, validate=validate.Length(max=32))
    photo_url = fields.String(required=True, validate=validate.Length(max=255))
