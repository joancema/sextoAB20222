FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 2500
ENTRYPOINT ["npm","start"]