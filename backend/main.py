from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Hello World"
    }

class User(BaseModel):
    name: str

@app.post("/greet")
def greet(user: User):
    return{
        "message" : f"Hello {user.name}!"
    }