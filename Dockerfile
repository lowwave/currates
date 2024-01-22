FROM node:18-alpine as build

# Set NODE_ENV for entire container
ENV NODE_ENV=production
ENV PORT=8080

# Create app directory
WORKDIR /app

# Copy over package files
COPY package.json yarn.lock ./

RUN NODE_ENV=development yarn

# Copy everything in our project to the docker file
COPY . .

# Build the application DIST
RUN yarn build

# Required ENV VARS for running in a container
ENV ADDRESS=0.0.0.0
# ENV PORT=8080
EXPOSE 8080

# Start the
CMD ["yarn", "start"]