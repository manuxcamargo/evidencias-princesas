CREATE DATABASE princesas;

\c princesas;

CREATE TABLE princess (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  poder VARCHAR(100)
);

INSERT INTO princess (nome, poder) VALUES ('Ariel', 'natação');
INSERT INTO princess (nome, poder) VALUES ('Moana', 'água');
INSERT INTO princess (nome, poder) VALUES ('Rapunzel', 'cabelo mágico');
INSERT INTO princess (nome, poder) VALUES ('Merida', 'arco e flecha');
INSERT INTO princess (nome, poder) VALUES ('Branca de Neve', 'veneno');
