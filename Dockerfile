FROM node:10.22.1

ENV NODE_ENV=production

# Install dependencies
RUN apt update -y &&  apt-get install -y hugo
RUN yarn global add bower gulp rimraf

# Build the documentation website
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN yarn && yarn run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /app/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
