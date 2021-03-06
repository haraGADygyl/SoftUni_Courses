"""Define readers table

Revision ID: 23e16126fb23
Revises: 
Create Date: 2021-12-13 20:40:25.548655

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23e16126fb23'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('books', sa.Column('reader_pk', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'books', 'readers', ['reader_pk'], ['pk'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'books', type_='foreignkey')
    op.drop_column('books', 'reader_pk')
    # ### end Alembic commands ###
