from resources.auth import Register, Login, LoginAdministrator, RegisterAdministrator
from resources.car import GetCarByPk, EditCar, DeleteCar, CreateCar, GetAllCars

routes = (
    (Register, "/register"),
    (Login, "/login"),
    (RegisterAdministrator, "/register_admin"),
    (LoginAdministrator, "/login_admin"),
    (CreateCar, "/car"),
    (GetAllCars, "/car"),
    (GetCarByPk, "/car/<int:pk>"),
    (EditCar, "/car/<int:pk>"),
    (DeleteCar, "/car/<int:pk>"),
)
