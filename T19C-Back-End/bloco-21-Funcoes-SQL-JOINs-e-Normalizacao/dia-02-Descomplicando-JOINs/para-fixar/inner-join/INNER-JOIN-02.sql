SELECT 
    A.first_name, A.last_name, F.address
FROM
    sakila.staff AS A
        INNER JOIN
    sakila.address AS F ON A.address_id = F.address_id
;
