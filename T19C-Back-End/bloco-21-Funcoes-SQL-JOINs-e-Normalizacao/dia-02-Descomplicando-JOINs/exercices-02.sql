SELECT 
    M.title,
    (B.domestic_sales + B.international_sales) AS 'Vendas'
FROM
    pixar.box_office AS B
        INNER JOIN
    pixar.movies AS M ON B.movie_id = M.id
WHERE
    B.international_sales > B.domestic_sales;