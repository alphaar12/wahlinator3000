# check if docker-compose is present, if not use docker compose
COMPOSE := $(shell command -v docker-compose 2> /dev/null)

ifndef COMPOSE
    COMPOSE := docker compose
endif

## execute the backend tests
backend-test:
	mvn -f vote/pom.xml test

## build the backend project
build-backend-image:
	$(COMPOSE) build wahlinator-backend 

## build the docker image for the backend
build-db-image:
	$(COMPOSE) build wahlinator-db

## build the docker image for the db migration
build-frontend-image:
	$(COMPOSE) build wahlinator-frontend

## build both backend and db migration image
build-images:
	build-db-image
	build-backend-image

## start the database
start-db:
	$(COMPOSE) up --build -d wahlinator-db

## start the local infrastructure
start-db-backend:
	$(COMPOSE) up --build -d wahlinator-db wahlinator-backend

## start the complete project
start-complete:
	$(COMPOSE) up --build -d wahlinator-db wahlinator-backend wahlinator-frontend

## stop the local infrastructure
stop:
	$(COMPOSE) down

## stop the local infrastructure and clean the volumes (database)
clean:
	$(COMPOSE) down -v

## execute frontend tests
frontend-test:
	pushd ./frontend && ng test && popd

## start frontend in dev mode
frontend-start:
	pushd ./frontend && ng serve && popd

#-----------------------------
# helper
#-----------------------------

## print help
help:
	@printf "\nusage : make <commands> \n\nthe following commands are available : \n\n"
	@cat $(MAKEFILE_LIST) | awk '1;/help:/{exit}' | awk '/##/ { print; getline; print; }' | awk '{ getline x; print x; }1' | awk '{ key=$$0; getline; print "$(GREEN)" key " $(WHITE)" $$0;}' | column -t -s \#
	@printf "$(RESET)\n"