var db = require('./config.js');


db.query("SELECT * FROM client INNERJOIN salesperson_client on (salesperson_client.client_id = client.client_id) WHERE salesperson_client.salesperson_id = 1")
.then(function(data){
  console.log('success');
  console.log(data);
})
.catch(function(error){
  console.log(error);
});

//SCHEMAS ---------------------------------------------
//Cannot use USER as a table name || forbidden words: http://www.postgresql.org/docs/current/interactive/sql-keywords-appendix.html
db.query("CREATE TABLE IF NOT EXISTS salesperson (salesperson_name VARCHAR(40),salesperson_id SERIAL PRIMARY KEY);")
 .then(function(){
   console.log('sales created');
   return db.query("CREATE TABLE IF NOT EXISTS client (client_name VARCHAR(40),client_id SERIAL PRIMARY KEY)");
   //if you want to add additional basic schema fields to the client such as info, add it to the string here
 })
 .then(function(){
   console.log('client created');
   return db.query("CREATE TABLE IF NOT EXISTS salesperson_client (salesperson_id int NOT NULL, client_id int NOT NULL, PRIMARY KEY (salesperson_id,client_id), FOREIGN KEY (salesperson_id) REFERENCES salesperson(salesperson_id), FOREIGN KEY (client_id) REFERENCES client(client_id));")
 })
 .then(function(){
   console.log('user client join created');
 })
.catch(function(error){
  console.log('error creating tables');
  console.log(error);
});



module.exports.getAllClientsGivenUserQueryString = 'really long string $1';