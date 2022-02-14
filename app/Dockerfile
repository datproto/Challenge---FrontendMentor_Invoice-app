FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN yarn

COPY . /usr/src/app

# Run app
CMD ["yarn", "dev"]