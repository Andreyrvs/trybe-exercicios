SELECT 
    CONCAT('Existem',
            ' ',
            COUNT(Name),
            ' ',
            'cientistas na tabela Scientists.') AS 'Total de cientistas'
FROM
    Scientists.Scientists