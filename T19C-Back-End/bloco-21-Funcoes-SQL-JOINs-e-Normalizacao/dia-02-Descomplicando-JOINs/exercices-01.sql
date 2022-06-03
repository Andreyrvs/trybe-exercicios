SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id;