# Atlassian Docker images

This project holds files and instructions on building Docker images for
  1. JIRA
  2. Confluence
  3. Bamboo
  4. Crucible-fisheye
  5. Sitemonitoring

## Getting Started

Install docker referring to the link https://docs.docker.com/engine/installation/linux/ubuntu/#os-requirements
check the docker vesrion
 $> docker --versions

 Start docker if not Started
 $> docker start

 Stopping docker
 $> docker stop


### Building docker images

Naviagate to the folder which has the respective Dockerfile.
Build the docker image providing the database password for the DB demoatlassian as an build argument. Password can be found in Passpack.

Example:-

 $> docker build --build-arg jiradbpasswordarg=jiradbpassword -t jiradockerimage .;
    where jiradbpassword - > jira database password
          jiradockerimage - > docker image name

### Running docker container

  $> docker run -d -p 8080:8080 jiradockerimage

### Enter into running docker container  

 Get the running container id
  $> docker ps

 Get into the container using the container id
  $> docker exec -it containerid /bin/bash  

### Useful docker commands
  $> docker ps (running docker containers)
  $> docker ps -a (List all docker containers with its container id's)
  $> docker images (List all docker images with its image id's)
  $> docker rmi IMAGEID (Delete the docker image)
  $> docker rm CONTAINERID (Delete container)
  $> docker rm $(docker ps -aq) (Delete all containers)
  $> docker rmi -f $(docker images -aq) (Delete all images)
  $> docker logs CONTAINERID (Running logs for the docker container)
