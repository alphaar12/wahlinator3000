# Wahlinator3000

## Projektdetails

Projektmanagement wird in Jira Dokumentiert
  * Arbeiten mit Scrum
  * Sprints mit Sprint-Planning, Backlog optimierung, Review und Retro
  * Projektteam-Aufteilung in: "Frontend", "Backend", "Datenbank", "Projektmanagement und Scrummaster"

Die Funktionalitäten der Website und alle weiteren Anforderungen wurden vorab im "Software Requirement Sheet" (SRS) dokumentiert

Bei Fragen zum Projekt wenden Sie sich an inf21011@lehre.dhbw-stuttgart.de

## Requirements

| Tool | Version | Optional |
| ---- | ------- | -------- |
| Make | current | true		|
| Java | 11      | false	|
| Maven  | 3.6.3   | false	|
| Angular  | 15.2.4   | false	|
| MySQL  | current   | false	|
| Docker  | 19   | false	|
| Docker-compose [^1]  | 3.7   | false	|


## Local setup

* Install requirements
* Start only the database
```shell
make start-db
```
* Start database and backend
```shell
make start-db-backend
```
* Stop all containers
```shell
make stop
```
* Stop all containers and delete data
```shell
make clean
```

For other commands execute:
```shell
make help
```

[^1]: The compose sub-command of the docker executable `docker compose` can also be used instead of `docker-compose`.