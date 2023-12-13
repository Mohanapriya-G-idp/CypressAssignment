FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080:80
ENTRYPOINT [ "npm","run","cypress:open" ]