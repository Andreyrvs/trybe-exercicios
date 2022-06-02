SELECT * FROM Pixar.BoxOffice;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES (13, 8.5, 300000000, 250000000),
(15, 7.4, 460000000, 510000000),
(16, 9.9, 290000000, 280000000);