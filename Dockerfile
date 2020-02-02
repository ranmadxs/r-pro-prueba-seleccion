FROM node:buster

# Create directory
RUN mkdir -p /usr/src/app/src

WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy source
COPY ./ /usr/src/app/
#COPY ./src/ /usr/src/app/src/

EXPOSE 3000
CMD [ "node", "index" ]
