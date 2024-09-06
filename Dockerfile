
FROM douggapp/apits:20240905B

LABEL maintainer="ddouggs"

RUN apt-get update && apt-get upgrade -y

WORKDIR /usr/share/nginx/html

EXPOSE 80 3000

CMD ["nginx", "-g", "daemon off;"]
