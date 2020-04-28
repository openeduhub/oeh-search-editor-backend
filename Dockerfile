FROM node:13-alpine

ENV PORT 80

WORKDIR /home/node/app
COPY dist .
COPY node_modules node_modules
CMD ["server.js"]