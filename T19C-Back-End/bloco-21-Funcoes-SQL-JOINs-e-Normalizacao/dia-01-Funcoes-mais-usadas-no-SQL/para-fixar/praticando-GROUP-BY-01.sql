SELECT 
    active, COUNT(active) AS total
FROM
    sakila.customer
GROUP BY active;