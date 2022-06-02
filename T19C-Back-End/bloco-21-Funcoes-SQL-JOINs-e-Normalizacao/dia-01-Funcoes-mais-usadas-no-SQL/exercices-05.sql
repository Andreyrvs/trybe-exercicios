SELECT 
    MAX(salary) AS 'maior sálario',
    MIN(salary) AS 'menor salário',
    SUM(salary) AS 'total',
    ROUND(AVG(salary), 2) AS 'média salálario'
FROM
    hr.employees;