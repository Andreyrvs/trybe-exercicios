-- Desativa o modo de segurança
SET SQL_SAFE_UPDATES = 0;
-- Primeiro tem que deletar as referencias da FK
DELETE FROM sakila.film_actor 
WHERE
    actor_id = 12;
-- Deleta de fato o ator
DELETE FROM sakila.actor 
WHERE
    first_name = 'KARL'