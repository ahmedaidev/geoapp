FROM node:lts-alpine

WORKDIR /app

COPY ./package.json ./
RUN yarn
COPY ./ ./

RUN NODE_ENV=production yarn build

CMD ["yarn", "start"]
