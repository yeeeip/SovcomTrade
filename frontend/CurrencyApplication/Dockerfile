FROM node:20.9-alpine

WORKDIR /app

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

COPY frontend/CurrencyApplication/package.json .
RUN npm install

COPY frontend/CurrencyApplication/. .
RUN npm run build

CMD ["npm", "start"]