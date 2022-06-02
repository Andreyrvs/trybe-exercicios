SELECT 
    employee_id, first_name, YEAR(hire_date) AS year_of_hire
FROM
    hr.employees;