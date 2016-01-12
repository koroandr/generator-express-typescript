FROM nodesource/node:4.0

ADD package.json package.json
RUN npm install
ADD . .
RUN npm install -g tsd
RUN tsd install
RUN npm install -g grunt-cli
RUN grunt ts

EXPOSE 3000 

CMD ["node", "bin/www"]
