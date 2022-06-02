SELECT 
    S.first_name, S.last_name, AVG(P.amount)
FROM
    sakila.staff AS S
        INNER JOIN
    sakila.payment AS P ON S.staff_id = P.staff_id
WHERE
    YEAR(P.payment_date) = 2006
GROUP BY S.first_name , S.last_name;