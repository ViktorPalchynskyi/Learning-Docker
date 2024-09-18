FROM node:22.8-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .
