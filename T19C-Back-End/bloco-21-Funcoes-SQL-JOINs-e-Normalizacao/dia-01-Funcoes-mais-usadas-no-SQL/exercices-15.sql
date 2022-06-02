SELECT 
    employee_id, first_name, MONTH(hire_date) AS month_of_hiring
FROM
    hr.employees;
