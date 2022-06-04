DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE funcionarios (
    funcionario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(14),
    data_cadastro DATETIME NOT NULL
);

CREATE TABLE setor (
    setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45)
);

CREATE TABLE funcionario_setor (
    funcionario_id INT,
    setor_id INT,
    CONSTRAINT PRIMARY KEY (funcionario_id , setor_id),
    FOREIGN KEY (funcionario_id)
        REFERENCES funcionarios (funcionario_id),
    FOREIGN KEY (setor_id)
        REFERENCES setor (setor_id)
);