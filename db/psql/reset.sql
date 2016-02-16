DROP TABLE clients_salespersons;
DROP TABLE subscriptions_clients;
DROP TABLE clients;
DROP TABLE salespersons;

CREATE TABLE IF NOT EXISTS clients (
  client_name VARCHAR(40),
  client_title VARCHAR(40),
  client_email VARCHAR(40),
  client_zipcode VARCHAR(5),
  client_birthday DATE,
  client_image VARCHAR(1000),
  client_company VARCHAR(40),
  client_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS salespersons (
  salesperson_name VARCHAR(40),
  salesperson_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS clients_salespersons (
  salesperson_id int NOT NULL,
  client_id int NOT NULL,
  PRIMARY KEY (salesperson_id,client_id),
  FOREIGN KEY (salesperson_id) REFERENCES salespersons(salesperson_id),
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE IF NOT EXISTS subscriptions_clients (
  subscription_id int NOT NULL,
  client_id int NOT NULL,
  FOREIGN KEY (subscription_id) REFERENCES salespersons(salesperson_id),
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);



INSERT INTO salespersons (salesperson_name)
  VALUES ('Alan Fu');

INSERT INTO clients (client_name, client_title, client_email, client_zipcode, client_birthday, client_image, client_company)
  VALUES ('Harun Davood', 'Software Engineer 3', 'harun@microsoft.com', '94301','1990-02-27','http://bit.ly/1PXWFwh' ,'Microsoft');

INSERT INTO clients (client_name, client_title, client_email, client_zipcode, client_birthday, client_image, client_company)
  VALUES ('Rachel Rose Figura', 'CPO', 'rrose@23andme.com', '94035','1985-03-11','http://bit.ly/1SQ3sL2' ,'23andMe');

INSERT INTO clients (client_name, client_title, client_email, client_zipcode, client_birthday, client_image, client_company)
  VALUES ('Ryan Wholey', 'Senior DevOps', 'ryanwholey@hooli.com', '94132', '1988-08-01','http://bit.ly/1QiCPHN','Hooli');

INSERT INTO clients_salespersons (salesperson_id, client_id)
  VALUES (1,1);

INSERT INTO clients_salespersons (salesperson_id, client_id)
  VALUES (1,2);

INSERT INTO clients_salespersons (salesperson_id, client_id)
  VALUES (1,3);
