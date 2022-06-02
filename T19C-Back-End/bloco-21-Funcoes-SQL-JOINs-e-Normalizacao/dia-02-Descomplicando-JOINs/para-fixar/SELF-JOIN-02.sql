SELECT 
    CONCAT(Manager.first_name,
            ' ',
            Manager.last_name) AS 'Nome Gerente',
    COUNT(*) as 'Quantidade de pessoas lideradas'
FROM
    hr.employees AS Manager
        INNER JOIN
    hr.employees AS Employee ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id