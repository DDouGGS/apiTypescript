
FROM douggapp/apits:20240905B

LABEL maintainer="ddouggs"

RUN apt-get update && apt-get upgrade -y

RUN npm init -y \
  && npm i --global typescript \
  && npm i express cors dotenv helmet morgan pg swagger-autogen swagger-ui-express express-async-errors \
  && npm i -D ts-node @types/express @types/cors @types/morgan @types/swagger-ui-express \
  && npx tsc --init

WORKDIR /usr/share/nginx/html

EXPOSE ${PORT} ${PORT_API}

CMD ["nginx", "-g", "daemon off;"]
