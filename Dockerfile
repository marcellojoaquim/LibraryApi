# Use a imagem oficial do Node.js
FROM node:21

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./
# Copia o arquivo .env para o container
COPY .env .env

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto para o container
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação com npm run start
CMD ["npm", "run", "dev"]
