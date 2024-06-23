FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN git pull

EXPOSE 3000

CMD ["npm", "run","dev"]
