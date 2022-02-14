FROM node:16-alpine

WORKDIR /usr/src/admin

COPY package*.json /usr/src/admin
RUN yarn

COPY . /usr/src/admin

# Run app
CMD ["yarn", "dev"]