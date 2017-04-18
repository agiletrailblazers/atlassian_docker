
# Pull base image.
FROM java:8-jre

#Setting Java Home and Options
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms2048m -Xmx2048m"

# Downloading sitemonitor artifact form ATB Nexus and unzipping
RUN mkdir nexus_artifact
RUN mkdir sitemonitor-installation
ADD http://54.175.158.124:8081/repository/sitemonitor/sitemonitoring-3.0.1.zip /nexus_artifact/sitemonitoring-3.0.1.zip
RUN unzip /nexus_artifact/sitemonitoring-3.0.1.zip -d /sitemonitor-installation
RUN mkdir sitemonitoring-workdir

# Removing artifact
RUN rm -rf /nexus_artifact/;

# Expose port 8081 of docker container
EXPOSE 8081

# Start Tomcat and tails logs
CMD java -jar -Dlogging.config=file:log4j.properties -Djava.io.tmpdir=./sitemonitoring-workdir -Dspring.profiles.active=standalone -Ddbport=9001 -Dserver.port=8081 -Xmx512m ./sitemonitor-installation/sitemonitoring/sitemonitoring.war
