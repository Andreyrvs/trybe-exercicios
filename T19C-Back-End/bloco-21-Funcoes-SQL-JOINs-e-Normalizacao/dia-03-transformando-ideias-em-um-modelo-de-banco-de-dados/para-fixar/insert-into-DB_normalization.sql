INSERT INTO normalization.funcionarios (funcionario_id, nome, sobrenome, email, telefone, data_cadastro)
VALUES
(12, 'Joseph','Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
(14, 'Cíntia', 'Duval','cindy@outlook.com','(33)99855-4669','2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO normalization.setor (nome)
VALUES ('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO normalization.funcionario_setor (funcionario_id, setor_id)
VALUES (12, 1),
(12, 2),
(13, 3),
(14, 4),
(14, 2),
(15, 5);
