FROM node:15
ENV NODE_ENV=production

# Install dependencies
RUN apt update -y
RUN yarn global add bower gulp rimraf
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_0.78.0_Linux-64bit.deb && \
    dpkg -i hugo_0.78.0_Linux-64bit.deb && \
    apt-get install -f && \
    hugo version

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
