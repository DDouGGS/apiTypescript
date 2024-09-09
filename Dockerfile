
FROM douggapp/apits:20240905B

LABEL maintainer="ddouggs"

RUN apt-get update && apt-get upgrade -y

WORKDIR /usr/share/nginx/html

EXPOSE ${PORT} ${PORT_API}

CMD ["nginx", "-g", "daemon off;"]
