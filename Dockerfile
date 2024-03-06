FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules

# Set the working directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Change ownership of the entire /home/node/app directory to the node user
RUN chown -R node:node /home/node/app

# Switch to the node user
USER node

# Install dependencies
RUN npm install

# Copy application files
COPY --chown=node:node . .

EXPOSE 8080

# Command to run the application
CMD [ "node", "app.js" ]