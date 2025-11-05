# 🐳 Exercício 1: Hello Container (Dockerfile + Docker Compose)

## 🎯 Objetivo

Aprender a criar uma imagem customizada a partir de um `Dockerfile` e orquestrá-la utilizando `docker-compose`.

---

## ✨ Descrição do Projeto

Este projeto implementa uma aplicação web simples em **Python** (utilizando o framework **Flask**) que exibe a mensagem **"Hello from Docker!"**.  
A solução é empacotada em um container Docker para demonstrar a criação de imagens customizadas e o uso de orquestração básica via **Docker Compose**.

---

## ⚙️ Requisitos e Tecnologias

- **Linguagem:** Python  
- **Framework:** Flask  
- **Orquestração:** Docker Compose  
- **Requisito de Ambiente:** Docker Desktop ou Docker Engine instalado e rodando

---

## 📂 Estrutura de Diretórios

A estrutura segue boas práticas, separando o código-fonte da configuração Docker:

```bash
exercicio-1/
├── .dockerignore         # Lista de exclusão para otimizar o build da imagem
├── app.py                # Código da aplicação Flask
├── docker-compose.yml    # Define e orquestra o serviço
├── Dockerfile            # Instruções para construir a imagem customizada
├── README.md             # Documentação do projeto
└── requirements.txt      # Dependências do Python (Flask)
```

---

## 🛠️ Instruções de Execução

### 1️⃣ Preparação do Ambiente

1. Certifique-se de ter o [Docker Desktop](https://www.docker.com/products/docker-desktop) iniciado, ou o Docker Engine rodando.
2. Navegue até o diretório raiz do projeto:

    ```bash
    cd exercicio-1
    ```

### 2️⃣ Subir a Aplicação com Docker Compose

O arquivo docker-compose.yml fará o build da imagem a partir do Dockerfile e iniciará o container, mapeando a porta 3000 do host para a 3000 do container.

```bash
docker compose up
```

⚠️ ATENÇÃO: O servidor Flask exibirá um WARNING sobre ser um servidor de desenvolvimento.
Isso é esperado e pode ser ignorado, pois o servidor está funcionando corretamente para fins de teste.

### 3️⃣ Acessar a aplicação

Após a execução, abra o navegador e acesse: http://localhost:3000

Mensagem na página: *Hello from Docker!*

### 4️⃣ Encerrar a Aplicação

Para parar e remover completamente os containers, volumes anônimos e a rede criada, execute:

```bash
docker compose down
```

---

## 🧑‍💻 Desenvolvedora

**Nome:** Tayling Ng

**Contato:** [LinkedIn](https://www.linkedin.com/in/tayling-ng/)
