FROM eclipse-temurin:17-jdk-alpine
LABEL authors="Young.K"

WORKDIR /usr/src/app/server

ARG JAR_FILE=./build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "./app.jar"]