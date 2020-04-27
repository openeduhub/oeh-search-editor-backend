FROM node:13-alpine

ENV PORT 80
ENV DB_HOST
ENV DB_PORT
ENV DB_USER
ENV DB_PASSWORD
ENV DB_DATABASE

WORKDIR /home/node/app
COPY dist .
COPY node_modules node_modules
CMD ["server.js"]