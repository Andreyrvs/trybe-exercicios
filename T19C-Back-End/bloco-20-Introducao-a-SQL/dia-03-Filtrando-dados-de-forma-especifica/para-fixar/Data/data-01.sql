SELECT 
    Count(*) as 'Pagamentos'
FROM
    sakila.payment
WHERE
   date(payment_date)= '2005-05-25';