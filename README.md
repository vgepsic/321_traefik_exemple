# App

This project demonstrates how to use **Traefik as a reverse proxy** to route requests to multiple services in a distributed application.

The application contains **three Docker services**:

-   **Traefik**: reverse proxy that receives HTTP requests and routes
    them to the correct service
-   **FastAPI**: simple Python API that returns a message
-   **Node.js**: Express application that calls the FastAPI service

Traefik automatically configures routes using **Docker labels** defined in `docker-compose.yml`.

## Execution

Run container composition with command : `docker compose up --build -d`

Traefik makes app available as below :

- http://localhost/api/hello → FastAPI
- http://localhost/nodeapp/hello → Node.js
- http://localhost:8080/dashboard → Traefik Dashboard