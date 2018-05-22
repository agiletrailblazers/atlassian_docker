
# Pull base image.
FROM java:8-jre

#Setting Java Home and Options
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms2048m -Xmx2048m"

# Downloading bamboo artifact form ATB Nexus and unzipping
RUN mkdir nexus_artifact
RUN mkdir bamboo-installation
ADD http://nexus.agiletrailblazers.com/repository/bamboo/atlassian-bamboo-5.15.5.zip /nexus_artifact/atlassian-bamboo-5.15.5.zip
RUN unzip /nexus_artifact/atlassian-bamboo-5.15.5.zip -d /bamboo-installation

# Removing artifact
RUN rm -rf /nexus_artifact/;

# Removing files with default bamboo configs
RUN rm -rf /bamboo-installation/atlassian-bamboo-5.15.5/atlassian-bamboo/WEB-INF/classes/bamboo-init.properties
RUN rm -rf /bamboo-installation/atlassian-bamboo-5.15.5/conf/server.xml
ADD bamboo-init.properties /bamboo-installation/atlassian-bamboo-5.15.5/atlassian-bamboo/WEB-INF/classes/bamboo-init.properties
ADD server.xml /bamboo-installation/atlassian-bamboo-5.15.5/conf/server.xml

# Expose port 8085 of docker container
EXPOSE 8085

# Start Tomcat and tails logs
CMD ./bamboo-installation/atlassian-bamboo-5.15.5/bin/startup.sh && tail -f ./bamboo-installation/atlassian-bamboo-5.15.5/logs/catalina.out
