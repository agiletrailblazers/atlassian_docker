
# Pull base image.
FROM java:8-jre

#Setting Java Home and Options
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms2048m -Xmx2048m"

ARG confluencedbpasswordarg

RUN /usr/sbin/useradd --create-home --comment "Account for running Confluence" --shell /bin/bash confluence

# Downloading confluence artifact form ATB Nexus and unzipping
RUN mkdir nexus_artifact
RUN mkdir confluence-installation
RUN mkdir -p /home/ubuntu/confluence/
#RUN chmod 777 -R /home/ubuntu/confluence/

ADD http://nexus.agiletrailblazers.com/repository/confluence/atlassian-confluence-6.1.0.zip /nexus_artifact/atlassian-confluence-6.1.0.zip
RUN unzip /nexus_artifact/atlassian-confluence-6.1.0.zip -d /confluence-installation

# Removing artifact
RUN rm -rf /nexus_artifact/;

# Removing files with default confluence configs
RUN rm -rf /confluence-installation/atlassian-confluence-6.1.0/confluence/WEB-INF/classes/confluence-init.properties
RUN rm -rf /confluence-installation/atlassian-confluence-6.1.0/conf/server.xml
RUN rm -rf /confluence-installation/atlassian-confluence-6.1.0/confluence/WEB-INF/web.xml
RUN rm -rf /home/ubuntu/confluence/confluence.cfg.xml

# Adding config files
ADD confluence-init.properties /confluence-installation/atlassian-confluence-6.1.0/confluence/WEB-INF/classes/confluence-init.properties
ADD server.xml /confluence-installation/atlassian-confluence-6.1.0/conf/server.xml
ADD web.xml /confluence-installation/atlassian-confluence-6.1.0/confluence/WEB-INF/web.xml
ADD confluence.cfg.xml /home/ubuntu/confluence/confluence.cfg.xml
RUN sed -i "s/confluencedbpassword/"$confluencedbpasswordarg"/g" /home/ubuntu/confluence/confluence.cfg.xml

RUN chown -R confluence:confluence /home/ubuntu/confluence/
RUN chown -R confluence:confluence /confluence-installation

RUN chmod 777 -R /confluence-installation
RUN chmod 777 -R /home/ubuntu/confluence/

USER confluence

# Expose port 8091 of docker container
EXPOSE 8091

# Start Tomcat and tails logs
CMD ./confluence-installation/atlassian-confluence-6.1.0/bin/start-confluence.sh && tail -f ./confluence-installation/atlassian-confluence-6.1.0/logs/catalina.out
