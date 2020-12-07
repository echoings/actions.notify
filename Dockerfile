FROM node:lts-alpine3.10

COPY * /

RUN chmod +x /*.sh

ENTRYPOINT ["/entrypoint.sh"]