INSERT INTO sakila.actor 
(first_name, last_name) 
SELECT 
first_name, last_name
from sakila.customer
order by customer_id limit 5