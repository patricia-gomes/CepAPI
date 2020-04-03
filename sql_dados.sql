-- Criando o banco de dados para domain
CREATE DATABASE IF NOT EXISTS domain;
USE domain;

-- Criando a tabela dominio
CREATE TABLE IF NOT EXISTS dominio (
id int(11) NOT NULL AUTO_INCREMENT,
dominio varchar(100) NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Inserindo os dados na tabela 'dominio'
INSERT INTO dominio (id, dominio) VALUES
(1, 'google.com'),
(2, 'google.com.br'),
(3, 'github.com'),
(4, 'twitter.com');