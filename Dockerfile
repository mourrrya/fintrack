ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
# ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json .

# Download dependencies as a separate step to take advantage of Docker's caching.
RUN yarn install

# Copy the rest of the source files into the image.
COPY . .

# Set default environment variables
ENV REACT_APP_SERVER_URL=http://localhost:4000

# Expose the port that the application listens on.
EXPOSE 3045

# Run the application.
CMD yarn run start
