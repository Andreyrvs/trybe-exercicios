DROP DATABASE IF EXISTS camada_de_model;
CREATE database camada_de_model;

use camada_de_model;

CREATE TABLE user
(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) not null,
    password varchar(30) not null,
    PRIMARY KEY(id)
);