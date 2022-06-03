SELECT 
    ACT.actor_id, ACT.first_name, F_A.film_id, FILM.title
FROM
    sakila.actor AS ACT
        INNER JOIN
    sakila.film_actor AS F_A ON ACT.actor_id = F_A.actor_id
        INNER JOIN
    sakila.film AS FILM ON F_A.film_id = FILM.film_id