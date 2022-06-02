SELECT 
    UCASE(CONCAT(first_name, ' ', last_name)) AS nome_em_caixa_alta
FROM
    hr.employees