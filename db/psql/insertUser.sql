INSERT INTO clients (client_name, client_email, client_birthday, client_company, client_zipcode, client_title, client_image) 
VALUES ($1, $2, $3, $4, $5, $6, $7);

INSERT INTO clients_salespersons (salesperson_id, client_id)
VALUES ($8, SELECT (client_id) WHERE client_name = $1);
