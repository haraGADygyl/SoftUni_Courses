"""empty message

Revision ID: 5a1fdac96b77
Revises: d2a1a10b243d
Create Date: 2021-12-25 19:28:26.612130

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "5a1fdac96b77"
down_revision = "d2a1a10b243d"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "complaints",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(length=100), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("photo_url", sa.String(length=255), nullable=False),
        sa.Column("amount", sa.Float(), nullable=False),
        sa.Column(
            "created_on", sa.DateTime(), server_default=sa.text("now()"), nullable=True
        ),
        sa.Column(
            "status",
            sa.Enum("pending", "approved", "rejected", name="state"),
            nullable=False,
        ),
        sa.Column("complainer_id", sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(
            ["complainer_id"],
            ["complainers.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("complaints")
    # ### end Alembic commands ###
