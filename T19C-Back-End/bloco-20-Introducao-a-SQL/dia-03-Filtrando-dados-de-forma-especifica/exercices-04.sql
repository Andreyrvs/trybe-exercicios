SELECT 
    COUNT(*)
FROM
    PecasFornecedores.Fornecedores
WHERE
    name LIKE '%LTDA'
ORDER BY name ASC