SELECT 
    C.first_name, COUNT(A.address) AS 'quantidade de endereços'
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    C.active = 1
GROUP BY C.customer_id
ORDER BY C.first_name DESC , last_name DESC;
