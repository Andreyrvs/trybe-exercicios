SELECT 
    job_id, AVG(salary) AS média_salarial
FROM
    hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY média_salarial DESC