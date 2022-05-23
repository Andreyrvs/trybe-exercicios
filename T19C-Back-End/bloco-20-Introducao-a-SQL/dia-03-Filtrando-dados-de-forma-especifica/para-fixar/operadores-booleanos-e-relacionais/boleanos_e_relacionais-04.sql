SELECT 
    COUNT(active) AS 'Usuarios Ativor'
FROM
    sakila.customer
WHERE
    active = 1