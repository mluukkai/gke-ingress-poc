FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV port=3000

EXPOSE 3000

CMD [ "node", "index.js" ]

# TAG=v4 && docker build --platform linux/amd64 -t mluukkai/poc:$TAG . && docker push mluukkai/poc:$TAG
