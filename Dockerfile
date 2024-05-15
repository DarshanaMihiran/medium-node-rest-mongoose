FROM node:20.6.1-alpine

ENV NODE_ENV=production

WORKDIR /urs/src/app
COPY src/package*.json ./
RUN npm install
COPY src/ .

EXPOSE 4001
CMD ["npm", "start"]