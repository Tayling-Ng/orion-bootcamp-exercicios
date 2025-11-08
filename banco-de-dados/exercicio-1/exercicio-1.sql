CREATE TABLE cursos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome_curso TEXT NOT NULL
);

CREATE TABLE alunos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  curso_id BIGINT,
  FOREIGN KEY (curso_id) REFERENCES cursos (id)
);

-- Inserir cursos
INSERT INTO cursos (nome_curso) VALUES
('Desenvolvimento Web Full Stack'),
('Administração de Banco de Dados'),
('Computação em Nuvem'),
('Cibersegurança e Redes'),
('Inteligência Artificial e Machine Learning');

-- Inserir alunos
-- Curso 1: Desenvolvimento Web Full Stack
INSERT INTO alunos (nome, email, curso_id) VALUES
('Lucas Almeida', 'lucas.almeida@example.com', 1),
('Mariana Torres', 'mariana.torres@example.com', 1),
('Ricardo Nogueira', 'ricardo.nogueira@example.com', 1);

-- Curso 2: Administração de Banco de Dados
INSERT INTO alunos (nome, email, curso_id) VALUES
('Fernanda Costa', 'fernanda.costa@example.com', 2),
('Thiago Moreira', 'thiago.moreira@example.com', 2),
('Juliana Mendes', 'juliana.mendes@example.com', 2);

-- Curso 3: Computação em Nuvem
INSERT INTO alunos (nome, email, curso_id) VALUES
('Rafael Martins', 'rafael.martins@example.com', 3),
('Beatriz Rocha', 'beatriz.rocha@example.com', 3),
('André Figueiredo', 'andre.figueiredo@example.com', 3);

-- Curso 4: Cibersegurança e Redes
INSERT INTO alunos (nome, email, curso_id) VALUES
('Patrícia Lima', 'patricia.lima@example.com', 4),
('Gustavo Ribeiro', 'gustavo.ribeiro@example.com', 4),
('Camila Fernandes', 'camila.fernandes@example.com', 4);

-- Curso 5: Inteligência Artificial e Machine Learning
INSERT INTO alunos (nome, email, curso_id) VALUES
('Eduardo Barros', 'eduardo.barros@example.com', 5),
('Sofia Carvalho', 'sofia.carvalho@example.com', 5),
('Bruno Oliveira', 'bruno.oliveira@example.com', 5);
