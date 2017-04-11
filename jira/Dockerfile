
# Pull base image.
FROM java:8-jre

ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre
ENV JAVA_OPTS="-Xms2048m -Xmx2048m"

ADD /atlassian-jira-software-7.3.4-standalone/ /jira-installation
RUN rm -rf /jira-installation/conf/server.xml
ADD server.xml /jira-installation/conf/server.xml

#RUN ./jira-installation/bin/startup.sh
RUN chmod +x /jira-installation/bin/start-jira.sh
RUN chmod +x /jira-installation/bin/catalina.sh
RUN /usr/sbin/useradd --create-home --comment "Account for running JIRA" --shell /bin/bash jira

#RUN chown -R jira /jira-installation/logs/
#USER jira

EXPOSE 8091

CMD ./jira-installation/bin/startup.sh && tail -f ./jira-installation/logs/catalina.out
