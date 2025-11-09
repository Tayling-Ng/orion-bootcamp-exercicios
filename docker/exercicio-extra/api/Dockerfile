# Stage 1: Builder (Instala todas as dependências)

FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copia arquivos de configuração de dependência
COPY api/package*.json ./
RUN npm install


# Stage 2: Development (Para Live Reload)

FROM node:20-alpine AS development

WORKDIR /usr/src/app

# Copia SOMENTE dependências instaladas (para otimização e live reload)
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY api/package*.json ./

CMD ["npm", "run", "dev"]


# Stage 3: Production (Imagem Final Leve e Otimizada)

FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copia SOMENTE dependências de produção (otimização e segurança)
COPY api/package.json ./
RUN npm install --omit=dev


COPY api/src ./src

EXPOSE 3000
CMD ["npm", "start"]