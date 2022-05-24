SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos
WHERE
    preco >= 15 AND preco < 40
ORDER BY preco ASC
