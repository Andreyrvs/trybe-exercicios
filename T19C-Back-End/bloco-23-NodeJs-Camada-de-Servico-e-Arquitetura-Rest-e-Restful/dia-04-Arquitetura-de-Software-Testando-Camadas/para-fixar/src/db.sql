create database if not exists model_example;

USE model_example;

CREATE TABLE movies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    directed_by VARCHAR(45) NOT NULL,
    release_year VARCHAR(4) NOT NULL
)