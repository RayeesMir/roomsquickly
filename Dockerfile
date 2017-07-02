FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/roomsquickly
WORKDIR /usr/src/roomsquickly

# Install app dependencies
COPY package.json /usr/src/roomsquickly/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]