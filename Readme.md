# Atlassian Docker images

This project holds files and instructions on building Docker images for
  1. JIRA
  2. Confluence
  3. Bamboo
  4. Crucible-fisheye
  5. Sitemonitoring
  6. Nexus3

## Getting Started

Install docker referring to the link https://docs.docker.com/engine/installation/linux/ubuntu/#os-requirements
check the docker vesrion<br />
 $> docker --versions

 Start docker if not Started<br />
 $> docker start

 Stopping docker<br />
 $> docker stop


### Building docker images

Naviagate to the folder which has the respective Dockerfile.
Build the docker image providing the database password for the DB demoatlassian as an build argument. Password can be found in Passpack.

Example:-<br />

 $> docker build --build-arg jiradbpasswordarg=jiradbpassword -t jiradockerimage .;<br />
    where jiradbpassword - > jira database password<br />
          jiradockerimage - > docker image name<br />

### Running docker container
<br />
  $> docker run -d -p 8080:8080 jiradockerimage<br />

### Running nexus docker container
<br />
  $> docker run -d -p 8081:8081 --name nexus -v /path/to/nexus-data:/nexus-data nexus3

### Enter into running docker container  

 Get the running container id<br />
  $> docker ps

 Get into the container using the container id<br />
  $> docker exec -it containerid /bin/bash  <br />

### Useful docker commands<br />
  $> docker ps (running docker containers)<br />
  $> docker ps -a (List all docker containers with its container id's)<br />
  $> docker images (List all docker images with its image id's)<br />
  $> docker rmi IMAGEID (Delete the docker image)<br />
  $> docker rm CONTAINERID (Delete container)<br />
  $> docker rm $(docker ps -aq) (Delete all containers)<br />
  $> docker rmi -f $(docker images -aq) (Delete all images)<br />
  $> docker logs CONTAINERID (Running logs for the docker container)<br />
