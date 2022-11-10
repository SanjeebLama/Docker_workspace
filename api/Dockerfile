# Parent Image
FROM node:17-alpine

RUN npm install -g nodemon 

WORKDIR /DockerApp

COPY package.json .

# Install dependencies in build time 
RUN npm install

# first . is for current directory and second . is for destination directory
COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"] 