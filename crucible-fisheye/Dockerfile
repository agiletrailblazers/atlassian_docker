
# Pull base image.
FROM java:8-jre

#Setting Java Home and Options
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms1024m -Xmx1024m"

# Downloading confluence artifact form ATB Nexus and unzipping
RUN mkdir nexus_artifact
RUN mkdir crucible-fisheye-installation
ADD http://54.175.158.124:8081/repository/crucible-fisheye/crucible-4.4.0.zip /nexus_artifact/crucible-4.4.0.zip
RUN unzip /nexus_artifact/crucible-4.4.0.zip -d /crucible-fisheye-installation

# Removing artifact
RUN rm -rf /nexus_artifact/;

# Expose port 8091 of docker container
EXPOSE 8060

# Start Tomcat and tails logs
CMD ./crucible-fisheye-installation/fecru-4.4.0/bin/start.sh && tail -f ./crucible-fisheye-installation/fecru-4.4.0/var/log/fisheye.out
