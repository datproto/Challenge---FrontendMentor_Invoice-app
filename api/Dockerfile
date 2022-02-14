FROM node:16-alpine

WORKDIR /usr/src/api

COPY package*.json /usr/src/api
RUN yarn

COPY . /usr/src/api

# Run app
CMD ["yarn", "start:dev"]