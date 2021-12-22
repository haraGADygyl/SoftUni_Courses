from flask import request
from werkzeug.exceptions import BadRequest


def validate_schema(schema_name):
    def wrapper(func):
        def decorate_func(*args, **kwargs):
            data = request.get_json()
            schema = schema_name()
            errors = schema.validate(data)

            if errors:
                raise BadRequest("some text")

            return decorate_func(*args, **kwargs)

        return wrapper
