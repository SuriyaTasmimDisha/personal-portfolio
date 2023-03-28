FROM node:lts-slim As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps vite@4.2.0

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

#api port
EXPOSE 5173

#socket port
# EXPOSE 3003

CMD ["npm","run","dev"]
