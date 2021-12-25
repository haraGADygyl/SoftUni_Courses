import enum


class RoleType(enum.Enum):
    complainer = "complainer"
    approver = "approver"
    administrator = "administrator"


class State(enum.Enum):
    pending = "Pending"
    approved = "Approved"
    rejected = "Rejected"
