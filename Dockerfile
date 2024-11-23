FROM node:lts-alpine
RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api
WORKDIR /home/node/api
COPY package.json npm.* ./
USER node
COPY --chown=node:node . .
EXPOSE 3000