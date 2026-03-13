from fastapi import FastAPI
import socket

app = FastAPI()

@app.get("/api/hello")
def hello():
    ip = socket.gethostbyname(socket.gethostname())
    return {"message": f"Hello from FastAPI at {ip}"}