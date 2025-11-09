# 🐳 Exercício 2: Compose com API + Banco de Dados

## 🎯 Objetivo

Aprender a conectar múltiplos containers (API + DB) usando **Docker Compose** e **variáveis de ambiente**, garantindo comunicação interna, persistência de dados e isolamento de serviços.

---

## ✨ Descrição do Projeto

Este exercício implementa uma stack com **dois serviços** principais:

1. **API (Node.js + Express)**  
   - Buildada via `Dockerfile` (imagem customizada).  
   - Usa variáveis de ambiente para se conectar ao banco.  
   - Conexão feita via hostname do serviço `db`.  

2. **Banco de Dados (PostgreSQL)**  
   - Utiliza imagem oficial `postgres:14-alpine`.  
   - Configurado com volume para persistência.  
   - Variáveis definidas no `docker-compose.yml` e `.env`.

A aplicação expõe uma API simples que se conecta ao PostgreSQL para gravação e leitura de dados.

---

## ⚙️ Tecnologias e Ferramentas

| Categoria | Ferramenta |
|------------|-------------|
| Linguagem  | Node.js 18 (alpine) |
| Framework  | Express.js |
| Banco de Dados | PostgreSQL 14 |
| Orquestração | Docker Compose |
| Gerenciamento de Variáveis | `.env` e `.env.example` |
| Persistência | Volume Docker (`db_data`) |

---

## 📂 Estrutura de Diretórios

```bash
exercicio-2/
├── api/
│ ├── Dockerfile
│ ├── index.js
│ ├── package.json
│ └── .dockerignore
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

## 🚀 Instruções de Execução

1. Clonar o Repositório:
    ```bash
    git clone https://github.com/Tayling-Ng/orion-bootcamp-exercicios
    ```

2. Navegar até o Diretório do Projeto:
    ```bash
    cd orion-bootcamp-exercicios/docker/exercicio-2
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
    ```

5. Build e inicialização dos Containers
    ```bash
    docker-compose up --build -d
    ```
    Isso irá:
    - Criar a rede interna para comunicação entre os containers.
    - Buildar a imagem da API a partir do Dockerfile.
    - Subir o banco PostgreSQL e a API simultaneamente.

6. Verificar os Containers em Execução
    ```bash
    docker ps
    ```

7. Acessar a aplicação

    Após a execução, abra o navegador e acesse: http://localhost:3000

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
