# Repositório de Exercícios: Aplicações Contêinerizadas com Docker e Docker Compose

## ✨ Visão Geral

Este repositório contém a solução e a documentação dos exercícios práticos focados na **containerização de aplicações** utilizando **Docker** e a orquestração de serviços com **Docker Compose**. O objetivo é aplicar boas práticas, configurar ambientes multi-serviço (API, Banco de Dados, Ferramentas de Admin) e gerenciar variáveis de ambiente de forma segura.

---

## 📂 Estrutura do Repositório

Todos os exercícios estão organizados em um diretório principal (`docker/`), com subdiretórios para cada atividade.

```bash
orion-bootcamp-exercicios/
├── docker/
│   ├── exercicio-1/           # Hello Container
│   ├── exercicio-2/           # Compose com API + Banco de Dados
│   ├── exercicio-3/           # Boas Práticas + Múltiplos Ambientes
│   └── exercicio-extra/       # Aplicação Completa com PgAdmin
└── README.md                  # Este arquivo
```
---

## 🎯 Sumário dos Exercícios

Cada exercício aborda um conceito fundamental no desenvolvimento com containers.  Para detalhes sobre a execução e arquitetura de cada projeto, consulte o arquivo README.md dentro do respectivo diretório.

---

### Exercício 1: "Hello Container"

- Objetivo: Criar uma imagem customizada a partir de um Dockerfile e orquestrá-la com docker-compose. 

- Foco: Uso de imagem base leve, WORKDIR, COPY e CMD.
---

### Exercício 2: Compose com API + Banco de Dados

- Objetivo: Conectar múltiplos containers (API + DB) usando Docker Compose e variáveis de ambiente.

- Foco: Criação de rede interna, conexão da API via hostname do serviço (db) e persistência de dados com volume.

---

### Exercício 3: Boas Práticas + Múltiplos Ambientes

- Objetivo: Aplicar boas práticas de build e configuração para ambientes de desenvolvimento (dev) e produção (prod).

- Foco: Criação de arquivos Compose dedicados (docker-compose.dev.yml e docker-compose.prod.yml) e builds otimizados.

---

### Exercício Extra: Aplicação Completa

- Objetivo: Orquestrar uma aplicação completa com três serviços: API, Banco de Dados e uma Interface de Administração (PgAdmin/Adminer).

- Foco: Configuração de Adminer/pgAdmin, Healthchecks no banco de dados e estrutura profissional de containers.

---

## 💻 Instruções de Uso

Para rodar qualquer um dos exercícios:

- Clone o repositório.

- Navegue até o diretório do exercício desejado (ex: cd docker/exercicio-extra).

- Siga as instruções detalhadas no README.md de cada projeto.

---

## ✨ Desenvolvedora

👩‍💻 **Tayling Ng**  
🔗 [LinkedIn](https://www.linkedin.com/in/taylingng/)  