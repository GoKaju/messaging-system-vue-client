# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
COPY . .
# start app
CMD ["npm", "run", "serve"]


#comands
# docker build -t messaging-system-vue-client:dev .
# docker run -it -p 8088:8080 --rm --name dockerize-messaging-system-vue-client  messaging-system-vue-client:dev
