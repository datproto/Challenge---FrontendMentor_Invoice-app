FROM node:lts-alpine AS development

WORKDIR /usr/src/api

COPY package*.json /usr/src/api
RUN yarn

COPY . /usr/src/api

RUN yarn build

# Build for production
FROM node:lts-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY --from=development /usr/src/api .

EXPOSE 8080

# Run app
CMD ["node", "dist/main"]