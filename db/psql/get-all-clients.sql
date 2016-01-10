-- $1 the salesperson_id
SELECT * FROM client
  INNER JOIN salesperson_client
  ON (salesperson_client.client_id = client.client_id)
  WHERE salesperson_client.salesperson_id = $1"
