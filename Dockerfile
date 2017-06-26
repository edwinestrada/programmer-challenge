# Use an official Node as a base image
FROM node:7.10.0-slim

COPY package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /app && cp -a /tmp/node_modules /app && rm -rf /tmp/node_modules
ADD . /app

WORKDIR /app

# RUN npm run build
# CMD npm start