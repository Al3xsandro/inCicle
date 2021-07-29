FROM node:alpine

WORKDIR /usr/nodeauth

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start