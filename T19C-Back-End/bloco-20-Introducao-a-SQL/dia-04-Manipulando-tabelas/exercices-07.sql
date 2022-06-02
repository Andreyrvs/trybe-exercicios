SELECT * FROM Pixar.Movies;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (2 , 9);

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';