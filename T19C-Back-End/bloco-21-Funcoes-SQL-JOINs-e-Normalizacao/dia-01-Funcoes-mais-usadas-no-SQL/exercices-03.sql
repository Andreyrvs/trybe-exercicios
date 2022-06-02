SELECT 
    job_id, AVG(salary) AS `média salarial`
FROM
    hr.employees
GROUP BY job_id
ORDER BY `média salarial` DESC;