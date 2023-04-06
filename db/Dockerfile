FROM mysql:latest

EXPOSE 3306

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=wahlinatordb
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

COPY wahlinator3000database.sql /docker-entrypoint-initdb.d/