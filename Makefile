DOCKER_COMPOSE = docker-compose
APP_NAME = oncinha

build:
	$(DOCKER_COMPOSE) build


up: 
	$(DOCKER_COMPOSE) up -d

down:
	$(DOCKER_COMPOSE) down 

logs:
	$(DOCKER_COMPOSE) logs -f

	

