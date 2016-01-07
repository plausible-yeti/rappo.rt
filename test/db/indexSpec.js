var expect = require('chai').expect;
var db = require('../../db/config.js');


//require in individual test files
var getAllClients = require('../../db/psql/getAllClients.js');

describe('Database Functions', function(){

  beforeEach( function (done) {
    db.connect();
    db.query('TRUNCATE salesperson, client, salesperson_client')
    .then(function(){
      done();
    });
  });

  it('Should getAllClients of a given salespersonId', function(done){
    db.query("INSERT INTO salesperson (salesperson_name) values ('Alan')")
    .then(function() {
      return db.query("INSERT INTO client (client_name) values ('Bob')");
    })
    .then(function() {
      return db.query("INSERT INTO client (client_name) values ('Phil')")
    })
    .then(function(){
      return db.query("INSERT INTO salesperson_client (salesperson_id, client_id) values (1,1)")
    })
    .then(function(){
      return db.query("INSERT INTO salesperson_client (salesperson_id, client_id) values (1,2)")
    })
    .then(function(){
      expect(getAllClients(1).length).to.equal(2);
      done();
    })
    done();
  });
  it('Should give empty array getAllClients if has no clients', function(done){
    db.query("INSERT INTO salesperson (salesperson_name) values ('Alan')")
    .then(function() {
      return db.query("INSERT INTO salesperson (salesperson_name) values ('Stephen')");
    })
    .then(function() {
      return db.query("INSERT INTO client (client_name) values ('Bob')");
    })
    .then(function() {
      return db.query("INSERT INTO client (client_name) values ('Phil')")
    })
    .then(function(){
      return db.query("INSERT INTO salesperson_client (salesperson_id, client_id) values (1,1)")
    })
    .then(function(){
      return db.query("INSERT INTO salesperson_client (salesperson_id, client_id) values (1,2)")
    })
    .then(function(){
      expect(getAllClients(2).length).to.equal(0);
      done();
    })
    done();
  });


})