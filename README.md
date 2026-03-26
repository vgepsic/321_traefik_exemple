# App

This project demonstrates how to use **Traefik as a reverse proxy** to route requests to multiple services in a distributed application.

The application contains **three Docker services**:

-   **Traefik**: reverse proxy that receives HTTP requests and routes
    them to the correct service
-   **FastAPI**: simple Python API that returns a message
-   **Node.js**: Express application that calls the FastAPI service

Traefik automatically configures routes using **Docker labels** defined in `docker-compose.yml`.

## Execution

- Option 1 - docker compose @ docker-compose.yml : `docker compose up --build -d`
- Option 2 - docker swarm   @ docker-stack.yml   : `docker stack deploy -c docker-stack.yml <STACK_NAME>`

Traefik makes app available as below :

- http://HOST/api/hello → FastAPI
- http://HOST/nodeapp/hello → Node.js
- http://HOST:8080/dashboard → Traefik Dashboard
- http://HOST:8081 → for Swarm visualizer (only in swarm mode)
