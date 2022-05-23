SELECT 
    CONCAT('O projeto',
            ' ',
            Name,
            ' ',
            'precisou de',
            ' ',
            Hours,
            ' ',
            'horas para ser concluido.') As 'Tempo de projeto'
FROM
    Scientists.Projects