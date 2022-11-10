# Parent Image
FROM node:17-alpine

WORKDIR /DockerApp

# first . is for current directory and second . is for destination directory
COPY . .

# Install dependencies in build time 
RUN npm install

EXPOSE 4000

CMD ["node", "app.js"] 