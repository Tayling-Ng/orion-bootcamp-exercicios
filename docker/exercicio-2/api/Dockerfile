# 1. Imagem base leve (Boas Práticas)
FROM node:18-alpine

# 2. Define o diretório de trabalho
WORKDIR /usr/src/app

# 3. Copia package.json e instala dependências (Otimização de cache de camadas)
COPY api/package*.json ./
RUN npm install

# 4. Copia o código da aplicação
COPY api/. .

# 5. Define a porta de escuta
EXPOSE 3000

# 6. Comando de execução
CMD [ "node", "index.js" ]