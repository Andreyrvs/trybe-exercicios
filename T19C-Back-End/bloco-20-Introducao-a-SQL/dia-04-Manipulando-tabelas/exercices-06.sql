SELECT * FROM Pixar.Movies;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Pixar.BoxOffice 
WHERE
	movie_id = 11;

DELETE FROM Pixar.Movies 
WHERE
    title = 'WALL-E';