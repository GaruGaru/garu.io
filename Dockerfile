FROM node:10-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.0.7

COPY . /usr/src/app

RUN ng build --prod

FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist/portfolio-ng /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
