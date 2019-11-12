FROM node:11.1-alpine as develop-stage

# instalar un simple servidor http para servir nuestro contenido estático
# RUN npm i npm@latest -g
RUN npm install -g http-server


# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app

# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json ./

# instalar dependencias del proyecto
RUN npm install --no-optional

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# construir aplicación para producción minificada
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]


#comands
# docker build -t messaging-system-vue-client .
# docker run -it -p 8088:8088 --rm --name dockerize-messaging-system-vue-client  messaging-system-vue-client