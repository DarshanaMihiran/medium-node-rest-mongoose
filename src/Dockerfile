FROM node:20.6.1
WORKDIR /urs/src/app
COPY package*.json app.js ./
RUN npm install
COPY . .

EXPOSE 4001
CMD ["npm", "start"]