INSERT INTO clients_salespersons (salesperson_id, client_id)
VALUES ($1, $2);

SELECT client_id, salesperson_id from clients_salespersons where client_id = $2;