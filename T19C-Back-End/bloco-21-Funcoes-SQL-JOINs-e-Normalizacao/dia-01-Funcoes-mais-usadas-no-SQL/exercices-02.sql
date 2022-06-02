SELECT 
    MAX(salary) - MIN(salary) AS diferença_dos_salários
FROM
    hr.employees