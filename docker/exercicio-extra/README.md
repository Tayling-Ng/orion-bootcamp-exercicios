# 🐳 Exercício Extra: Stack Completa com PgAdmin

## 🎯 Objetivo

Aprender a orquestrar uma stack de desenvolvimento completa, incluindo **API**, **Banco de Dados (DB)** e uma **Interface de Gerenciamento de DB (PgAdmin)**, usando **Docker Compose**. O foco é na gestão segura das variáveis de ambiente e na comunicação eficiente entre os três serviços.

---

## ✨ Descrição do Projeto

Este projeto implementa uma stack com **três serviços** principais:

1. **API (Node.js/Express)**
    - Serviço responsável pela lógica da aplicação, utilizando o banco de dados.
    - É buildada a partir de um `Dockerfile` customizado.
    - Conecta-se ao banco de dados via variáveis de ambiente.

2. **Banco de Dados (PostgreSQL)**
    - Utiliza a imagem oficial `postgres`.
    - Configurado com um volume para **persistência de dados**.

3. **PgAdmin**
    - Interface web gráfica para gerenciar o banco de dados PostgreSQL.
    - As credenciais de acesso são definidas de forma segura através de variáveis de ambiente no `.env`.

---

## ⚙️ Tecnologias e Ferramentas

| Categoria | Ferramenta |
| :--- | :--- |
| Linguagem | Node.js |
| Framework | Express.js |
| Banco de Dados | PostgreSQL |
| Ferramenta de Gerenciamento | PgAdmin |
| Orquestração | Docker Compose |
| Gerenciamento de Variáveis | **`.env`**  e **`.env.example`**  |

---

## 📂 Estrutura de Diretórios

```bash
exercicio-extra/
├── api/
│   ├── src/
│   │   └── index.js
│   ├── Dockerfile
│   ├── package.json
│
├── .dockerignore
├── .env  
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- **Docker Desktop** ou **Docker Engine** instalado e em execução

---

## 🚀 Instruções de Execução

1. Clonar o Repositório:
    ```bash
    git clone https://github.com/Tayling-Ng/orion-bootcamp-exercicios
    ```

2. Navegar até o Diretório do Projeto:
    ```bash
    cd orion-bootcamp-exercicios/docker/exercicio-extra
    ```

3. Configurar o arquivo .env

    Crie um arquivo .env na raiz com base no modelo .env.example:
    ```
    cp .env.example .env
    ```

4. Editar o .env para definir as variáveis de ambiente conforme necessário:
    ```
    POSTGRES_PASSWORD=sua_senha_aqui
    POSTGRES_DB=nome_do_banco
    POSTGRES_USER=usuario

    PGADMIN_DEFAULT_EMAIL=seu_email_para_o_login_no_pgadmin
    PGADMIN_DEFAULT_PASSWORD=sua_senha_de_acesso_ao_pgadmin
    ```

5. Build e inicialização dos Containers
    ```bash
    docker-compose up --build -d
    ```
    Isso irá:
    - Criar a rede interna.
    - Criar volumes para persistência do PostgreSQL.
    - Buildar o serviço api.
    - Subir db, pgadmin e api.

6. Verificar os Containers em Execução
    ```bash
    docker ps
    ```

## 🚀 Acessar a Aplicação

#### 🧩 API

   - Após a execução, abra o navegador e acesse: http://localhost:3000/health

#### 📊 PgAdmin
   - Após a execução, abra o navegador e acesse: http://localhost:8080
   - Use as credenciais para acessar a interface web do PgAdmin definidas  no arquivo `.env`.
   - Após o login, você poderá gerenciar seu banco de dados PostgreSQL através da interface gráfica.

---

## 🚀 Encerrar a Aplicação

1. Para remover tudo (containers e redes), mantendo os volumes:
    ```bash
    docker compose down
    ```

2. Remover tudo (containers, redes e volumes):
    ```bash
    docker compose down -v
    ```
---

## ✨ Desenvolvedora

👩‍💻 **Tayling Ng**  
🔗 [LinkedIn](https://www.linkedin.com/in/taylingng/)  