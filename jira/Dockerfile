
# Pull base image.
FROM java:8-jre

ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms2048m -Xmx2048m"
ENV JIRA_HOME="/home/ubuntu/jira_home/"

# Downloading confluence artifact form ATB Nexus and unzipping
RUN mkdir nexus_artifact
RUN mkdir jira-installation
ADD http://nexus.agiletrailblazers.com/repository/jira/atlassian-jira-software-7.9.2.tar.gz /nexus_artifact/atlassian-jira-software-7.9.2.tar.gz
RUN tar -xvzf /nexus_artifact/atlassian-jira-software-7.9.2.tar.gz -C /jira-installation
RUN mkdir -p /home/ubuntu/jira_home;

# Removing artifact
RUN rm -rf /nexus_artifact/;

# Removing pre existing config files
RUN rm -rf /jira-installation/atlassian-jira-software-7.9.2-standalone/conf/server.xml
RUN rm -rf /jira-installation/atlassian-jira-software-7.9.2-standalone/bin/check-java.sh

# Adding config files
ADD server.xml /jira-installation/atlassian-jira-software-7.9.2-standalone/conf/server.xml
ADD check-java.sh /jira-installation/atlassian-jira-software-7.9.2-standalone/bin/check-java.sh
ADD dbconfig.xml /home/ubuntu/jira_home/dbconfig.xml

# Provide execution permission
RUN chmod +x /jira-installation/atlassian-jira-software-7.9.2-standalone/bin/start-jira.sh
RUN chmod +x /jira-installation/atlassian-jira-software-7.9.2-standalone/bin/check-java.sh
RUN chmod +x /jira-installation/atlassian-jira-software-7.9.2-standalone/bin/catalina.sh
RUN chmod 755 /jira-installation/atlassian-jira-software-7.9.2-standalone/bin/start-jira.sh
#RUN /usr/sbin/useradd --create-home --comment "Account for running JIRA" --shell /bin/bash jira

RUN adduser --disabled-password --gid 0 --gecos "JIRA user" jira
USER jira
#RUN chown rosuser:root /home/rosuser && chmod 0775 /home/rosuser

RUN chown jira:root -R /home/ubuntu/jira_home && chmod 0775 /home/ubuntu/jira_home
RUN chown jira:root -R /jira-installation && chmod 0775 /jira-installation
#RUN chmod 777 -R /home/ubuntu/jira_home
#RUN chmod 777 -R /jira-installation

EXPOSE 8080

USER jira

# Start Jira
CMD ./jira-installation/atlassian-jira-software-7.9.2-standalone/bin/startup.sh && tail -f ./jira-installation/atlassian-jira-software-7.9.2-standalone/logs/catalina.out
