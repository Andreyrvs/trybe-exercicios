use sakila;
SELECT 
    email
FROM
    customer
WHERE
    address_id BETWEEN 172 AND 176
ORDER BY email;
