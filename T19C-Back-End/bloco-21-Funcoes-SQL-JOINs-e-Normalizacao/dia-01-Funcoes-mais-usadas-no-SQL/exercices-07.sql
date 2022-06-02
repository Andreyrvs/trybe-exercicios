SELECT 
    job_id, SUM(salary) AS total
FROM
    hr.employees
GROUP BY job_id