-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_simulados;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_simulados
CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_simulados;

CREATE TABLE perguntas (
pergunta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
pergunta_titulo VARCHAR(70) NOT NULL,
pergunta_informacao VARCHAR(255) NOT NULL,
pergunta_ultima_edicao DATETIME NOT NULL,
cadastro_id INT NOT NULL,
FOREIGN KEY  (cadastro_id) REFERENCES cadastro(cadastro_id)
);

INSERT INTO perguntas 
(pergunta_titulo,pergunta_informacao,pergunta_ultima_edicao,cadastro_id)
VALUES 
('QUAL MELHOR PROGRAMA PARA FAZER CODIGO?','quero codar gostaria de um programa para fazer meus codigos!','2023-03-21 16:09:00','1'),
('o CHATGPT FAZ CODIGO?','quais tipos de codigo','2023-03-21 16:12:00','2'),
('qual melhor jeito de resolver conta de equacao','quero saber o metodo mais facil','2023-03-21 16:14:00', '3');