FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update && apk add git

RUN npm install

COPY . .

RUN git pull

EXPOSE 3000

CMD ["npm", "run","dev"]
