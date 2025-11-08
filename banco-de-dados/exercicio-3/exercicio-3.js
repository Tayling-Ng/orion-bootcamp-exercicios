// 1. Seleciona o banco de dados. Ele será criado se não existir.
use('blog_posts');

// 2. Inserir o primeiro documento (estrutura básica).
db.posts.insertOne(
    {
        titulo: "Orion Bootcamp: Introdução ao NoSQL",
        autor: "Tayling Ng",
        conteudo: "Os bancos NoSQL, como o MongoDB, dispensam a rigidez do schema, agilizando o desenvolvimento.",
    }
);

// 3. Inserir o segundo documento com o campo "tags" (Teste de Schema Flexível).
db.posts.insertOne(
    {
        titulo: "Entendendo o Conceito de Documento",
        autor: "Instrutor João",
        conteudo: "Um documento em MongoDB é uma estrutura JSON/BSON, permitindo campos aninhados e arrays.",
        tags: ["nosql", "mongodb", "documentos", "schema-flexivel"] // <-- Campo extra
    }
);

// 4. Consultar todos os documentos (Prova de Critério de Sucesso).
db.posts.find({});