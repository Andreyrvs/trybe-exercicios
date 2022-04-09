## SELECT , o primeiro passo

1. Escreva uma query que selecione todas as colunas da tabela city ;
2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
3. Escreva uma query que exiba todas as colunas da tabela rental ;
4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
5. Utilize o SELECT para explorar todas as tabelas do banco de dados.

USE sakila;
SELECT 
    *
FROM
    city;

---

SELECT 
    *
FROM
    rental;
---
SELECT 
    first_name, last_name
FROM
    customer;
---
SELECT 
    title, release_year
FROM
    film
---


## CONCAT

1. Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .
2. Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
3. Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .

---
SELECT 
    CONCAT(first_name, ' ', last_name) AS 'Nome Completo'
FROM
    sakila.actor
---
SELECT 
    CONCAT(title, ' ', rating) AS 'Classificação'
FROM
    sakila.film
---
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address
---
