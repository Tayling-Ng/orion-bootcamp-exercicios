// Seleciona o banco de dados. Ele será criado se não existir.
use('blog_posts');

// 4.1 - Update: Adiciona o campo comentarios como um array de documentos
db.posts.updateOne(
    { titulo: "Entendendo o Conceito de Documento" },
    {
        $set: {
            comentarios: [
                {
                    usuario: "Carla Mendes",
                    mensagem: "Excelente explicação sobre documentos!",
                    data: new Date("2025-11-07")
                },
                {
                    usuario: "Felipe Rocha",
                    mensagem: "Gostei do exemplo com schema flexível.",
                    data: new Date("2025-11-07")
                }
            ]
        }
    }
);
// 4.1 - Consultar o documento atualizado para verificar a adição do campo comentarios
db.posts.find({ titulo: "Entendendo o Conceito de Documento" });


// 4.3 - Testar ambientes

// a) Escreva uma consulta find() que retorne apenas posts com a tag "nosql"
db.posts.find({ tags: "nosql" });

// b) Escreva uma consulta find() que retorne apenas posts onde o autor seja um nome específico
db.posts.find({ autor: "Tayling Ng" });