FROM node:lts AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:lts AS buider
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./
RUN npx prisma generate
ENV NODE_ENV=production

EXPOSE 3000 
CMD [ "node", "app.js" ]