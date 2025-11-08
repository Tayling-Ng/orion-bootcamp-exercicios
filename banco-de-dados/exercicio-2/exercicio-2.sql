-- 1. Use INNER JOIN para mostrar o nome do aluno e o nome do curso que ele está fazendo, em uma única consulta.

SELECT 
  alunos.nome,
  cursos.nome_curso
FROM 
  alunos
INNER JOIN 
  cursos
ON 
  alunos.curso_id = cursos.id;

-- 2. Use WHERE e JOIN para mostrar apenas os alunos que estão no curso de, por exemplo, "Desenvolvimento Web".

SELECT 
  alunos.nome,
  cursos.nome_curso
FROM 
  alunos
INNER JOIN 
  cursos
ON 
  alunos.curso_id = cursos.id
WHERE 
  cursos.nome_curso = 'Computação em Nuvem';

-- 3. UPDATE: Altere o curso_id de um aluno específico (ex: "Mover Maria para o curso de Ciência de Dados").

UPDATE alunos
SET curso_id = (SELECT id FROM cursos WHERE nome_curso = 'Segurança da Informação e Cibersegurança')
WHERE nome = 'Aluno 001';

# EXTRA:
# Escreva um SELECT com LEFT JOIN e WHERE para descobrir quais cursos não possuem nenhum aluno matriculado.

SELECT 
  cursos.nome_curso
FROM 
  cursos
LEFT JOIN 
  alunos 
ON 
  cursos.id = alunos.curso_id
WHERE 
  alunos.id IS NULL;
