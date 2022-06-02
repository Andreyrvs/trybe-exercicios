SELECT 
    rating, SUM(replacement_cost) AS total_do_custo_de_troca
FROM
    sakila.film
GROUP BY rating
HAVING total_do_custo_de_troca > 3950.50;
