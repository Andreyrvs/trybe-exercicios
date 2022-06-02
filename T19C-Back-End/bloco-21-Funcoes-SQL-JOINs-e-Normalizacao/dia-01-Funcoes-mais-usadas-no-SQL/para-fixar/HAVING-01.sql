SELECT 
    rating, AVG(length) AS duração_média
FROM
    sakila.film
GROUP BY rating
HAVING duração_média BETWEEN 115.0 AND 121.50
ORDER BY duração_média DESC;