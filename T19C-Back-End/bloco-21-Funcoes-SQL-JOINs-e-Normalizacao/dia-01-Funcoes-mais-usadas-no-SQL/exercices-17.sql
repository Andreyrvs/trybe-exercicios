SELECT 
    last_name, hire_date
FROM
    hr.employees
WHERE
    DATE(hire_date) LIKE '1987-07-%';