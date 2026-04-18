from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from tools import (
    log_interaction,
    edit_interaction,
    get_interactions,
    suggest_next_action,
    generate_report,
)
from agent import process_chat

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Interaction(BaseModel):
    doctor_name: str
    product: str
    notes: str


@app.get("/")
def home():
    return {"message": "API running"}


@app.post("/log-interaction")
def log(data: Interaction):
    return log_interaction(data.dict())


@app.post("/chat")
def chat(input: dict):
    return process_chat(input["message"])


@app.get("/interactions")
def get_all():
    return get_interactions()


@app.put("/edit")
def edit(data: dict):
    return edit_interaction(data)


@app.get("/suggest")
def suggest():
    return suggest_next_action()


@app.get("/report")
def report():
    return generate_report()
