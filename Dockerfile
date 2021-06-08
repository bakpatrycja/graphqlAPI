FROM node:latest

COPY . .

RUN npm install

EXPOSE 8080:3000

CMD npm run start