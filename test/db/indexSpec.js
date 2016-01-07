var pgp = require('pg-promise');
var expect = require(/*EDIT PATH*/'../../node_modules/chai/chai').expect;

describe('Persistant Node Client Server', function(){
  var dbConnection;
  beforeEach( function (done) {
    //create connection
    //drop all the tables
    //create fresh, empty tables
    done();
  });

  afterEach( function () {
    //end the connection

  })

  it('Should create tables if they do not exist on init', function(done){
    //run index.js
    //\dt 
    //expect rows to be certain length;
    done();
  });

  it('Should getAllClients of a given salespersonId', function(done){
    //insert 2 salespeople
    //insert 2 clients
    //
    done();
  });


})