var db = require('./config.js');


//SCHEMAS ---------------------------------------------
//Cannot use USER as a table name || forbidden words: http://www.postgresql.org/docs/current/interactive/sql-keywords-appendix.html
db.query("CREATE TABLE IF NOT EXISTS salespersons (salesperson_name VARCHAR(40),salesperson_id SERIAL PRIMARY KEY);")
 .then(function(){
   console.log('sales created');
   return db.query("CREATE TABLE IF NOT EXISTS clients (client_name VARCHAR(40),"
   	+ "client_title VARCHAR(40)," 
   	+ "client_email VARCHAR(40)," 
   	+ "client_zipcode VARCHAR(5)," 
   	+ "client_birthday DATE,"
   	+ "client_image VARCHAR(1000),"
   	+ "client_company VARCHAR(40),"
   	+ " client_id SERIAL PRIMARY KEY)");
   //if you want to add additional basic schema fields to the client such as info, add it to the string here
 })
 .then(function(){
   console.log('clients created');

   return db.query("CREATE TABLE IF NOT EXISTS clients_salespersons (salesperson_id int NOT NULL, client_id int NOT NULL, PRIMARY KEY (salesperson_id,client_id),"
   + " FOREIGN KEY (salesperson_id) REFERENCES salesperson(salesperson_id), FOREIGN KEY (client_id) REFERENCES client(client_id));");
 })
 .then(function(){
   console.log('user client join created');
   return db.query("CREATE TABLE IF NOT EXISTS subscriptions (subscription_id SERIAL PRIMARY KEY, subscription_type VARCHAR(40),"
    + " subscription_name VARCHAR(1000))");
 })
 .then(function(){
  console.log('subscription table created')
  return db.query("CREATE TABLE IF NOT EXISTS subscriptions_clients (subscription_id int NOT NULL, client_id int NOT NULL, FOREIGN KEY (subscription_id)" 
    + " REFERENCES salesperson(salesperson_id), FOREIGN KEY (client_id) REFERENCES client(client_id));");
 })
 .then(function(){
  console.log('subscription client join created')
 })
.catch(function(error){
  console.log('error creating tables');
  console.log(error);
});

