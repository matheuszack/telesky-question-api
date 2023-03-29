-- Apagar o banco de dados se existir
DROP DATABASE IF EXISTS banco_de_dados_cadastro;
-- Criar banco de dados
CREATE DATABASE banco_de_dados_cadastro
CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_cadastro;

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
