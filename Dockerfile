FROM node:latest
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
RUN npm run build

EXPOSE 5004
CMD ["npm", "start"]