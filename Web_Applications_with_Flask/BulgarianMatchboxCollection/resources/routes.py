from resources.auth import Register, Login, LoginAdministrator, RegisterAdministrator
from resources.car import ListCreateCar

routes = (
    (Register, "/register"),
    (Login, "/login"),
    (RegisterAdministrator, "/register_admin"),
    (LoginAdministrator, "/login_admin"),
    (ListCreateCar, "/car"),
)
