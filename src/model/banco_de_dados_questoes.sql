-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_questoes;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_questoes
CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_questoes;

CREATE TABLE questoes (
  questao_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  questao_titulo VARCHAR(255) NOT NULL,
  questao_opcao ENUM('A', 'B', 'C', 'D') NOT NULL,
  questao_resolucao TEXT NOT NULL,
  cadastro_id INT NOT NULL,
FOREIGN KEY  (cadastro_id) REFERENCES cadastro(cadastro_id)
);

INSERT INTO questoes (questao_titulo, questao_opcao, questao_resolucao, cadastro_id)
VALUES 
('Qual é o resultado da equação (5 + 3) x 2 ?', 'A) 8  B) 10  C) 16  D) 18', 'C) 16 - A equação indica que, primeiro, deve-se resolver a soma dentro dos parênteses: 5 + 3 = 8. Em seguida, multiplicar o resultado por 2: 8 x 2 = 16.', 1),
('Qual é a capital do Brasil?', 'A) São Paulo  B) Rio de Janeiro  C) Brasília  D) Belo Horizonte', 'C) Brasília - Brasília é a capital federal do Brasil.', '2'),
('Qual é a fórmula da água?', 'A) H2SO4  B) NaCl  C) H2O  D) CO2', 'C) H2O - A fórmula química da água é H2O, que representa duas moléculas de hidrogênio e uma molécula de oxigênio.', '3');