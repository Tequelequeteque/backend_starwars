FROM node:alpine
WORKDIR /var/project
ARG PORT
ENV PORT $PORT
EXPOSE $PORT

ADD . .
CMD yarn dev