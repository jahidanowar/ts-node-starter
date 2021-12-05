FROM node:15-alpine

# Setting Working Directory
WORKDIR /usr/src/app

# Deleting old build files
RUN rm -rf build

# Compiling native dependency for bcrypt
RUN apk --no-cache add --virtual builds-deps build-base python3

# Copying dependency list from the source to docker image
COPY package*.json .

# Installing dependencies
RUN npm install

# Copying source code to the docker image
COPY . .

# Openning the application port
EXPOSE 1337

# Changing the user from root to node
USER node

# Compiling the application
RUN npm run build

# Running the application
CMD ["node", "build/server.js"]