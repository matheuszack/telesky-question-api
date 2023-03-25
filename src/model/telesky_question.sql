DROP DATABASE IF EXISTS telesky_question;
CREATE DATABASE telesky_question CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci; 

CREATE TABLE cadastro (
cadastro_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
cadastro_nome VARCHAR (255) NOT NULL,
cadastro_email VARCHAR (255) NOT NULL,
cadastro_senha VARCHAR (255) NOT NULL,
cadastro_status ENUM('on', 'off', 'del') DEFAULT 'on'
);
INSERT INTO  cadastro (cadastro_nome, cadastro_email,cadastro_senha,cadastro_status)
VALUES 
('Matheus','theusdejesus@gmail.com','1234qweasd','on'),
('Mariana','marianafreire079@gmail.com','11234qwe','on'),
('pamelass','pamelinha@gmai.com','123','on');

drop table cadastro;
select * from cadastro;


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

select * from perguntas;
CREATE TABLE questoes (
  questao_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  questao_titulo VARCHAR(255) NOT NULL,
  questao_opcao ENUM('A', 'B', 'C', 'D') NOT NULL,
  questao_resolucao TEXT NOT NULL,
  usuario_id INT NOT NULL,
FOREIGN KEY  (usuario_id) REFERENCES usuarios (usuario_id)
);
drop table questões;

INSERT INTO questoes (questao_titulo, questao_opcao, questao_resolucao, usuario_id)
VALUES 
('Qual é o resultado da equação (5 + 3) x 2 ?', 'A) 8  B) 10  C) 16  D) 18', 'C) 16 - A equação indica que, primeiro, deve-se resolver a soma dentro dos parênteses: 5 + 3 = 8. Em seguida, multiplicar o resultado por 2: 8 x 2 = 16.', 1),
('Qual é a capital do Brasil?', 'A) São Paulo  B) Rio de Janeiro  C) Brasília  D) Belo Horizonte', 'C) Brasília - Brasília é a capital federal do Brasil.', '2'),
('Qual é a fórmula da água?', 'A) H2SO4  B) NaCl  C) H2O  D) CO2', 'C) H2O - A fórmula química da água é H2O, que representa duas moléculas de hidrogênio e uma molécula de oxigênio.', '3');

select * from questoes;
CREATE TABLE simulados (
  simulado_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  simulado_titulo VARCHAR(255) NOT NULL,
  simulado_questao VARCHAR(255) NOT NULL,
  simulado_opcao_1 VARCHAR(255) NOT NULL,
  simulado_opcao_2 VARCHAR(255) NOT NULL,
  simulado_opcao_3 VARCHAR(255) NOT NULL,
  simulado_opcao_4 VARCHAR(255) NOT NULL,
  simulado_resolucao VARCHAR(255) NOT NULL,
  usuario_id INT NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id)
);

INSERT INTO simulados (simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, usuario_id)
VALUES
('Simulado de Matemática - Nível Médio', 'Qual é o valor de x na equação 2x + 5 = 13?', '3', '4', '6', '8', 'Subtraindo 5 de ambos os lados da equação, temos: 2x = 8. Em seguida, dividindo ambos os lados por 2, temos: x = 4.', 1),
('Simulado de Matemática - Nível Médio', 'Qual é o valor de y na equação 3y - 2 = 7?', '3', '4', '5', '6', 'Somando 2 em ambos os lados da equação, temos: 3y = 9. Em seguida, dividindo ambos os lados por 3, temos: y = 3.', 1),
('Simulado de Matemática - Nível Superior', 'Qual é a solução da equação x² - 5x + 6 = 0?', 'x = 2 ou x = 3', 'x = -2 ou x = -3', 'x = 2 ou x = -3', 'x = -2 ou x = 3', 'Podemos utilizar o método da fatoração para obter as raízes da equação. Temos: x² - 5x + 6 = 0 <=> (x - 2)(x - 3) = 0. Logo, x = 2 ou x = 3.', 2),
('Simulado de Matemática - Nível Superior', 'Qual é o valor de sen(60º)?', '√3/2', '1/2', '1/√2', '√2/2', 'Podemos utilizar a definição do seno para encontrar a resposta: sen(60º) = cateto oposto / hipotenusa. No triângulo retângulo com ângulo de 60º, o cateto oposto ao ângulo é igual a √3 e a hipotenusa é igual a 2. Logo, sen(60º) = √3/2.', 2);
select * from simulados;
