SELECT 
    A.actor_id, A.first_name, F.film_id
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS F ON A.actor_id = F.actor_id;
