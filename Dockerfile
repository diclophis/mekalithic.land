FROM wkndr:latest

#COPY resources/* /var/lib/wkndr/resources/
COPY public/* /var/lib/wkndr/public/
COPY Wkndrfile /var/lib/wkndr/

#RUN ls -lh /var/lib/wkndr/resources
RUN ls -lh /var/lib/wkndr/public

RUN /var/lib/wkndr/iterate-web.sh
