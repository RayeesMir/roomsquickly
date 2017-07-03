FROM node:boron

RUN mkdir roomsquickly
WORKDIR roomsquickly

COPY package.json /roomsquickly

RUN npm install

COPY . /roomsquickly

EXPOSE 3000

CMD [ "npm", "start" ]	