SELECT 
    rating, AVG(rental_duration) AS media_de_duração
FROM
    sakila.film
GROUP BY rating
ORDER BY media_de_duração DESC;