use sakila;
SELECT 
    *
FROM
    customer
WHERE
    last_name IN ('hicks' , 'crawford',
        'henry',
        'boyd',
        'mason',
        'morales',
        'kennedy')
ORDER BY first_name;
