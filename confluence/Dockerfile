
# Pull base image.
FROM java:8-jre

#Setting Java Home and Options
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms2048m -Xmx2048m"

# Downloading confluence artifact form ATB Nexus and unzipping
RUN mkdir nexus_artifact
RUN mkdir confluence-installation
ADD http://54.175.158.124:8081/repository/confluence-trial/atlassian-confluence-6.1.0.zip /nexus_artifact/atlassian-confluence-6.1.0.zip
RUN unzip /nexus_artifact/atlassian-confluence-6.1.0.zip -d /confluence-installation

# Removing artifact
RUN rm -rf /nexus_artifact/;

# Removing files with default confluence configs
RUN rm -rf /confluence-installation/atlassian-confluence-6.1.0/confluence/WEB-INF/classes/confluence-init.properties
RUN rm -rf /confluence-installation/atlassian-confluence-6.1.0/conf/server.xml
ADD confluence-init.properties /confluence-installation/atlassian-confluence-6.1.0/confluence/WEB-INF/classes/confluence-init.properties
ADD server.xml /confluence-installation/atlassian-confluence-6.1.0/conf/server.xml

# Expose port 8091 of docker container
EXPOSE 8091

# Start Tomcat and tails logs
CMD ./confluence-installation/atlassian-confluence-6.1.0/bin/startup.sh && tail -f ./confluence-installation/atlassian-confluence-6.1.0/logs/catalina.out
