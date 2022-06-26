# usando uma imagem do node mais leve
FROM node:16-alpine
# cria uma pasta onde fica o codigo
WORKDIR /app
# copia só o que precisa
COPY ./ ./
# Esse é um regex que pega todos aquivos que tem package e .json em seu nome
# COPY package*.json ./
# permite a inserção de variaveis de ambiente
ENV \
  APP_PORT=3000 \
  MYSQL_HOST=localhost \
  MYSQL_PORT=3306 \
  MYSQL_USER=root \
  MYSQL_PASSWORD=root