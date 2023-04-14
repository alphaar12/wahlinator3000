## execute the backend tests
backend-test:
	mvn -f vote/pom.xml test

## build the backend project
build-backend-image:
	docker-compose build wahlinator-backend 

## build the docker image for the backend
build-db-image:
	docker-compose build wahlinator-db

## build the docker image for the db migration
build-frontend-image:
	docker-compose build wahlinator-frontend

## build both backend and db migration image
build-images:
	build-db-image
	build-backend-image

## start the database
start-db:
	docker-compose up --build -d wahlinator-db

## start the local infrastructure
start-db-backend:
	docker-compose up --build -d wahlinator-db wahlinator-backend

## start the complete project
start-complete:
	docker-compose up --build -d wahlinator-db wahlinator-backend wahlinator-frontend

## stop the local infrastructure
stop:
	docker-compose down

## stop the local infrastructure and clean the volumes (database)
clean:
	docker-compose down -v

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