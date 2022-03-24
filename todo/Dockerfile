FROM node:lts-alpine
WORKDIR /vue-app
COPY . .
RUN npm install axios --save
RUN npm install
RUN npm run build
RUN npm install -g live-server
EXPOSE 8080
CMD ["npm", "run", "serve"]