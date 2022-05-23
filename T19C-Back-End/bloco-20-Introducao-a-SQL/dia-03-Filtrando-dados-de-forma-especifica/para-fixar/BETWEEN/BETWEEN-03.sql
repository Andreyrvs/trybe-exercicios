SELECT 
    count(payment_id) as 'Quantidade de pagamentos do mes 05 ao 08 de 2005'
FROM
    sakila.payment
    where payment_date BETWEEN '2005-05-01' and '2005-08-01'
