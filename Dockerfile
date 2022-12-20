FROM node
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
#RUN npm run build

EXPOSE 5004
CMD ["npm", "run", "build"]