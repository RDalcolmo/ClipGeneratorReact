FROM node as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install -g npm install
COPY . /app
RUN npm run build --omit=dev

EXPOSE 5004
CMD ["npm", "start"]