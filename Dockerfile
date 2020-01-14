FROM nginx:alpine

COPY .docz/dist /usr/share/nginx/html
