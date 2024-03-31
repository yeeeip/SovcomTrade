FROM node:20.9-alpine

WORKDIR /app

COPY frontend/CurrencyApplication/package.json .
RUN npm install

COPY frontend/CurrencyApplication/. .
RUN npm run build

CMD ["npm", "start"]