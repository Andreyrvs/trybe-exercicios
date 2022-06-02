SELECT 
    first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(), hire_date) AS dias_trabalhados
FROM
    hr.employees
