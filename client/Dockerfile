FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN yarn
COPY ./ ./
RUN yarn build

FROM nginx
EXPOSE 8080
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
