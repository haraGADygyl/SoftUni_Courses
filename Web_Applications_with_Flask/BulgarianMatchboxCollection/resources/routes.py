from resources.auth import Register, Login
from resources.car import ListCreateCar

routes = (
    (Register, "/register"),
    (Login, "/login"),
    (ListCreateCar, "/create"),
)
