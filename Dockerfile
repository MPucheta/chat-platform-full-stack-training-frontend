FROM node:lts-alpine

COPY src /usr/src/app/src
COPY public /usr/src/app/public
COPY package.json /usr/src/app/package.json

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

EXPOSE 3000

RUN npm install --silent

CMD ["npm", "start"]
