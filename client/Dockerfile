FROM node:18.18.0 AS build
LABEL authors="Young.K"

WORKDIR /usr/src/app/client

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:latest

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/client/build /usr/share/nginx/html