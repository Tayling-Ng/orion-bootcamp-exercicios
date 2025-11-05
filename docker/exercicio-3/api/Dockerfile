# Stage 1: Build (Usado para instalar dependências e manter dev)

FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copia e instala as dependências
COPY package*.json ./
RUN npm install


# Stage 2: Development (Para uso em ambiente de desenvolvimento)

FROM node:20-alpine AS development

WORKDIR /usr/src/app

# Copia as dependências já instaladas do estágio 'builder'
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY package*.json ./

# Adiciona Nodemon para desenvolvimento.
RUN npm install -g nodemon

# O modo 'dev' irá sobrescrever com 'nodemon'
CMD ["node", "index.js"]


# Stage 3: Production (Imagem Final Otimizada e Leve)

FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copia APENAS as dependências de produção do estágio 'builder'
COPY package*.json ./

# Instala SÓ as dependências necessárias para rodar (sem devDependencies)
RUN npm ci --only=production

# Copia o código da aplicação
COPY index.js .

# Expõe a porta e define o comando de inicialização
EXPOSE 3000
CMD ["node", "index.js"]