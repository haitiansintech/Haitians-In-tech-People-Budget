# Dockerfile
FROM node:16

# Set environment to staging
ENV NODE_ENV=staging

# Copy the configuration files
WORKDIR /opt/
COPY ./package*.json .

# Install dependencies
RUN npm install

# Copy the server files
COPY ./ .

# Expose the port
EXPOSE 3001

# Start the server
CMD ["npm", "run", "server"]
