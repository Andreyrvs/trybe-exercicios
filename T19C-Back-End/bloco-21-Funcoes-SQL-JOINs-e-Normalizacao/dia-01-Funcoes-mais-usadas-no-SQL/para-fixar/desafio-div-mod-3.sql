SELECT 
    IF(220 MOD 12 = 0,
        'NÃO',
        CONCAT('SIM,', ' ', 220 MOD 12)) AS 'Temos lugares sobrando?';