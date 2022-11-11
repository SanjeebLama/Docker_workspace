# Docker 🐳
It basically solves the problem of **“But, it works on my machine.... 🤷‍♂️”**


## Docker Images:
- It’s a blueprint for the docker containers.
- It consist the information about the runtime environment, application code, any dependencies, extra configuration, commands, etc.

## Docker Container:
- Docker container is a process, and it runs the outline as per the docker image 
(with exact runtime environment, dependencies, etc.)
- Containers are also known as isolated process.
- Eg: if node 10 is installed in our machine, but docker image has node 16 requirement then it doesn’t matter, the container runs regardless of the requirement for node 16 because node 16 will be present in the container.



## Docker Image: Parent Images
- Images are made up of different Layers.
- Parent Image:
	- Includes the OS & sometimes the run time environment eg: node, python, ruby, etc.


## How to create our own docker image?
- We need to create a docker file. 
- It consists of all the instructions required to create a docker image like which runtime, command and dependencies to use.

## Create image 🧑‍💻
Docker image is created under the name **myapp**.

```sh 
docker build -t myapp . 
```


## Few helpful commands:
Build Images
Docker image is created under the name myapp.

` docker build -t myapp `


1. List all images
```sh
docker images
```


2. Delete an image
```sh
docker rmi <image_name>
```




3. Remove all unused images
```sh
docker image prune
```

4. Create and run a container from an image, with a custom name:
```sh
docker run --name <container_name> <image_name>
```

5. Run a container with and publish a container’s port(s) to the host.
```sh
docker run -p <host_port>:<container_port> <image_name>


❯ docker run --name my_app_cache2 -p 4000:4000 -d myapp

-d : run container in the background

```

6. Start or stop an existing container:
```sh
docker start|stop <container_name> (or <container-id>)
```

7. Remove a stopped container:
```sh
docker rm <container_name>
```

8. To list currently running containers:
```sh
-a [active only]
-all (running and stopped)
docker ps
```
	



10. **Danger Command **
```sh
docker system prune -a
```


11. Docker Volume:
```sh
docker run --name my_app_v2 -p 4000:4000 --rm -v /Users/sanjeeb.lama/Workspace/docker_workspace/api:/DockerApp -v /DockerApp/node_modules myapp:v2
```


12. Docker Compose:
```sh
docker-compose up
```
```sh
docker compose down
–-rmi all (to remove all images
-v to remove volumes as well 
docker-compose down —-rmi all -v
```


## Docker Cheatsheet
https://docs.docker.com/get-started/docker_cheatsheet.pdf

