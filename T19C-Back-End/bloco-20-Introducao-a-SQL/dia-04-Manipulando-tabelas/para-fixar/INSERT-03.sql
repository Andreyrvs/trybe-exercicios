INSERT INTO sakila.staff 
(first_name, last_name, address_id, email, store_id, active, username) 
SELECT 
first_name, last_name, 1, concat(first_name, '@email.com'), 1, 1, first_name 
from sakila.actor 