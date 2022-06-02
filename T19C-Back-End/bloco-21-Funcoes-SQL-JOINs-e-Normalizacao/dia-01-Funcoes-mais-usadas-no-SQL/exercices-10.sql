SELECT 
    AVG(salary) AS media_salario, COUNT(*) AS qtd_funcionarios
FROM
    hr.employees
GROUP BY department_id
HAVING qtd_funcionarios > 10;
