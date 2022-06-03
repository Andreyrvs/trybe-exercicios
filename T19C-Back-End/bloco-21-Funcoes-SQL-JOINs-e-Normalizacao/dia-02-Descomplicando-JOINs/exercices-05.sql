SELECT 
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    T.id,
    T.name,
    T.location
FROM
    pixar.theater AS T
        RIGHT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name ASC;