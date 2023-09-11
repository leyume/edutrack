from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(
    "mysql://li:abc@ti_data/trackit", echo=True, pool_pre_ping=True
)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        print("DB CONNECT............")
        yield db
    finally:
        print("DB CLOSING............")
        db.close()