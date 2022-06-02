SELECT 
    district, COUNT(address) AS quantidade_registros
FROM
    sakila.address
GROUP BY district
ORDER BY quantidade_registros DESC;
