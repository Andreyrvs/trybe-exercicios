SELECT 
    M.id,
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    M.theater_id
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id
WHERE
    B.rating > 8
        AND M.theater_id IS NOT NULL;
