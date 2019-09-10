FROM node:lts-alpine

# Set working dir
RUN install -m 775 -d /usr/src/app
WORKDIR /usr/src/app

# Add node module to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent

# Start app
CMD ["npm", "start"]
