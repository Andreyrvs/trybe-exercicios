SELECT * FROM Pixar.BoxOffice;

SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000