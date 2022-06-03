SELECT 
    CONCAT(Employee.first_name,
            ' ',
            Employee.last_name) AS 'Nome Pessoa Colaboradora',
    CONCAT(Manager.first_name,
            ' ',
            Manager.last_name) AS 'Nome Gerente'
FROM
    hr.employees AS Employee
        INNER JOIN
    hr.employees AS Manager ON Employee.department_id <> Manager.department_id
