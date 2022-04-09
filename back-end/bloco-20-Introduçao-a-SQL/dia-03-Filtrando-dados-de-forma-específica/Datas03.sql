USE sakila;
SELECT 
    DATE(rental_date) AS Data,
    YEAR(rental_date) AS Ano,
    MONTH(rental_date) AS Mes,
    DAY(rental_date) AS Dia,
    HOUR(rental_date) AS Hora,
    MINUTE(rental_date) AS Minuto,
    SECOND(rental_date) AS Segundo
FROM
    rental
WHERE
    rental_id = 10330;
