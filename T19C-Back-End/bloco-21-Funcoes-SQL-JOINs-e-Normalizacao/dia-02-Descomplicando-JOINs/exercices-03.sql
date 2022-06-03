SELECT 
    M.title, B.rating
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id
ORDER BY B.rating DESC;