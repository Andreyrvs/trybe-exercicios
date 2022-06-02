SELECT 
    employee_id, first_name, DAY(hire_date) AS hiring_day
FROM
    hr.employees;