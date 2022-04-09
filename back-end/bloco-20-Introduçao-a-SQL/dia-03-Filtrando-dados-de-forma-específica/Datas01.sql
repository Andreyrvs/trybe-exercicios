use sakila;
SELECT 
    COUNT(*) pagamentos
FROM
    payment
WHERE
    DATE(payment_date) = '2005-05-25'

