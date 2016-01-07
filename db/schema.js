var db = require('./config.js');


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
   return db.query("CREATE TABLE IF NOT EXISTS salesperson_client (salesperson_id int REFERENCES salesperson (salesperson_id) ON UPDATE CASCADE ON DELETE CASCADE,client_id int REFERENCES client (client_id) ON UPDATE CASCADE ON DELETE CASCADE)");
 })
 .then(function(){
   console.log('user client join created');
 })
.catch(function(error){
  console.log('error creating tables');
  console.log(error);
});



module.exports.getAllClientsGivenUserQueryString = 'really long string $1';