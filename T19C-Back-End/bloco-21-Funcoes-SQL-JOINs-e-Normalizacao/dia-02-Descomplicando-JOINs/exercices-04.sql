SELECT 
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        LEFT JOIN
    pixar.movies AS M ON M.theater_id = T.id
ORDER BY T.name ASC