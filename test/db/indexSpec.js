var db = require('../../db/config.js');
var expect = require('../../node_modules/chai/lib/chai').expect;

//require in individual test files
var getAllClients = require('../../db/psql/getAllClients.js');

describe('Persistant Node Client Server', function(){

  beforeEach( function (done) {
    db.connect();
    db.query('TRUNCATE salesperson, client, salesperson_client')
    .then(function(){
      done();
    });
  });

  afterEach( function () {
    db.end();
  })

  //THIS TEST SHOULD BE UPDATED AS TABLES ARE ADDED
  it('Should create initial tables if they do not exist on init', function(done){
    db.query('\dt')
    .then(function(data){
      expect(results.length).to.equal(3);
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