-- Desativa o modo de segurança
SET SQL_SAFE_UPDATES = 0;
-- Primeiro tem que deletar as referencias da FK
DELETE FROM sakila.film_actor 
WHERE
    actor_id IN(8, 103, 181);
-- Deleta de fato os atores
DELETE FROM sakila.actor 
WHERE
    first_name = 'MATTHEW'