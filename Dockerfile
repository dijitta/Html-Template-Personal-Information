FROM node:lts
WORKDIR /var/www
COPY package.json .
RUN npm install --quiet
COPY . .