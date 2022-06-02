SELECT 
    employee_id, first_name, MONTH(hire_date) AS hiring_day
FROM
    hr.employees;