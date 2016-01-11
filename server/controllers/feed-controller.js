'use strict';
var db = require('../../db');
var bingApi = require('../helpers/bing-search-api.js')
var weatherApi = require('../helpers/weather-api.js')
var Client = require('../models').Client;
var moment = require('moment');
var getBirthdayMessage = require('../helpers/birthdateCalc.js');

module.exports = {
  // FOR TESTING DELETE THIS LATER
    getOneClient: function(req,res){
      Client.getOne(req.params.client_id, function(result){ 
        module.exports.get(req,res, result,function(feedResult){
          res.json(feedResult);
        });
      });
    
    },
  //
  getBing: function(company,cb){
  	bingApi(company, function(result){
  		cb(result.d.results);
  	})
  },
  getWeather: function(zipcode, cb){
  	weatherApi(zipcode, function(result){
  		cb(result);
  	})

  },
  get:function(req, res, params, callback) {
      var feedResults = {};
      var zipcode = params[0].client_zipcode;
      var company = params[0].client_company;
      module.exports.getBing(company, function(bingResults) {
        console.log("bing results are:", bingResults);
        feedResults.bing = bingResults;
        module.exports.getWeather(zipcode, function(weatherResults) {
          feedResults.weather = weatherResults;
          ;
          // feedResults.message
          feedResults.message = params[0].client_name+"'s birthday is "+ getBirthdayMessage(params[0].client_birthday) +'! Think about '
          + 'how you can make their day special.'
          res.json(feedResults);
        });
      });
    }
}