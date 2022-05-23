SELECT 
    COUNT(active) AS 'Usuarios Ativos'
FROM
    sakila.customer
WHERE
    active = 1 AND store_id = 1