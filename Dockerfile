
FROM douggapp/base:20240902

LABEL maintainer="ddouggs"

RUN apt-get update && apt-get upgrade -y
# RUN apt-get install nginx -y

# COPY  docker/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
