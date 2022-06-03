SELECT 
    C.first_name, C.email, C.address_id, A.address, A.district
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';