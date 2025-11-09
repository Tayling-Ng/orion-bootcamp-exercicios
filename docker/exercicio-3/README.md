# 🧩 Exercício 3 — Boas Práticas + Múltiplos Ambientes

## 🎯 Objetivo

Aplicar boas práticas de build, separando ambientes de desenvolvimento e produção, com imagens otimizadas e configurações adequadas para cada contexto.

---

## 📝 Descrição do Projeto

Este projeto é uma **evolução do exercício 2**, com foco em aplicar boas práticas de build e configuração de **múltiplos ambientes (dev e prod)** utilizando **Docker e Docker Compose**.

---

## 🧩 Tecnologias Utilizadas

- **Node.js**
- **Docker & Docker Compose**
- **PostgreSQL**
- **Nodemon (ambiente Dev)**

---

## 📂 Estrutura de Diretórios

```bash
exercicio-3/
├── api/
│ ├── node_modules
│ ├── Dockerfile
│ ├── index.js
│ ├── package.json
│
├── .dockerignore
├── .env
├── .env.example
├── .gitignore
│
├── docker-compose.dev.yml
├── docker-compose.prod.yml
│
└── README.md
```

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- **Docker Desktop** ou **Docker Engine** instalado e em execução

## ⚙️ Instruções de Execução

1. Clonar o Repositório:

   ```bash
   git clone https://github.com/Tayling-Ng/orion-bootcamp-exercicios
   ```

2. Navegar até o Diretório do Projeto:

   ```bash
   cd orion-bootcamp-exercicios/docker/exercicio-3
   ```

3. Build e inicialização dos Containers

    #### 🧩 Ambiente de Desenvolvimento

   ```bash
   # Carrega o .env e sobe o ambiente de desenvolvimento
    docker compose -f docker-compose.dev.yml up -d --build
   ```

    #### 🚀 Ambiente de Produção

   ```bash
   # Carrega o .env e sobe o ambiente de produção
    docker compose -f docker-compose.prod.yml up -d --build
   ```

## 🚀 Acessar a Aplicação

#### 🧩 Ambiente de Desenvolvimento

   - Após a execução, abra o navegador e acesse: http://localhost:3000

#### 🚀 Ambiente de Produção
   - Após a execução, abra o navegador e acesse: http://localhost:8080

---

## ❌ Encerrar a Aplicação

#### 🧩 Ambiente de Desenvolvimento

1. Para remover tudo (containers e redes), mantendo os volumes:

   ```bash
   docker compose -f docker-compose.dev.yml down
   ```

2. Remover tudo (containers, redes e volumes):
   ```bash
   docker compose -f docker-compose.dev.yml down -v
   ```

#### 🚀 Ambiente de Produção

1. Para remover tudo (containers e redes), mantendo os volumes:

   ```bash
   docker compose -f docker-compose.prod.yml down
   ```

2. Remover tudo (containers, redes e volumes):
   ```bash
   docker compose -f docker-compose.prod.yml down -v
   ```

---

## ✨ Desenvolvedora

👩‍💻 **Tayling Ng**  
🔗 [LinkedIn](https://www.linkedin.com/in/taylingng/)  