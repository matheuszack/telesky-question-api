-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_simulados;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_simulados
CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_simulados;

CREATE TABLE simulados (
  simulado_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  simulado_titulo VARCHAR(255) NOT NULL,
  simulado_questao VARCHAR(255) NOT NULL,
  simulado_opcao_1 VARCHAR(255) NOT NULL,
  simulado_opcao_2 VARCHAR(255) NOT NULL,
  simulado_opcao_3 VARCHAR(255) NOT NULL,
  simulado_opcao_4 VARCHAR(255) NOT NULL,
  simulado_resolucao VARCHAR(255) NOT NULL,
  cadastro_id INT NOT NULL,
  FOREIGN KEY (cadastro_id) REFERENCES cadastro(cadastro_id)
);

INSERT INTO simulados (simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id)
VALUES
('Simulado de Matemática - Nível Médio', 'Qual é o valor de x na equação 2x + 5 = 13?', '3', '4', '6', '8', 'Subtraindo 5 de ambos os lados da equação, temos: 2x = 8. Em seguida, dividindo ambos os lados por 2, temos: x = 4.', 1),
('Simulado de Matemática - Nível Médio', 'Qual é o valor de y na equação 3y - 2 = 7?', '3', '4', '5', '6', 'Somando 2 em ambos os lados da equação, temos: 3y = 9. Em seguida, dividindo ambos os lados por 3, temos: y = 3.', 1),
('Simulado de Matemática - Nível Superior', 'Qual é a solução da equação x² - 5x + 6 = 0?', 'x = 2 ou x = 3', 'x = -2 ou x = -3', 'x = 2 ou x = -3', 'x = -2 ou x = 3', 'Podemos utilizar o método da fatoração para obter as raízes da equação. Temos: x² - 5x + 6 = 0 <=> (x - 2)(x - 3) = 0. Logo, x = 2 ou x = 3.', 2),
('Simulado de Matemática - Nível Superior', 'Qual é o valor de sen(60º)?', '√3/2', '1/2', '1/√2', '√2/2', 'Podemos utilizar a definição do seno para encontrar a resposta: sen(60º) = cateto oposto / hipotenusa. No triângulo retângulo com ângulo de 60º, o cateto oposto ao ângulo é igual a √3 e a hipotenusa é igual a 2. Logo, sen(60º) = √3/2.', 2);