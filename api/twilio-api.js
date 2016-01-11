'use strict';

var moment = require('moment');
var rp = require('request-promise');

var appId = process.env.TWILLIO_SID;
var pass = process.env.TWILLIO_AUTH_TOKEN;
var fromNumber = process.env.TWILLIO_PHONE_NUMBER;
var url = 'https://api.twilio.com/2010-04-01/Accounts/'+ appId +'/Messages.json';


function sendMessage (opts) {
  var date = moment(opts.eventDate).year(moment(Date.now()).year()).fromNow();
  var msg = opts.recipient +"'s " +
    opts.eventName + " is coming up " +
    date + ". Be the best part of the day with one of these ideas!";

  var options = {
    method: 'POST',
    uri: url,
    form: {
      "To": opts.toNumber,
      "From": fromNumber,
      "Body": msg
    },
    auth: {
      user: appId,
      password: pass
    }
  };

  rp(options)
      .then(function (body) {
          var result = JSON.parse(body);
          console.log(result);
          return result;
      })
      .catch(function (err) {
          console.log(err);
      });
}

module.exports = sendMessage;

// For testing purposes
// var input = {
//   toNumber: "+XXXXXXXXXXX",

// };
// console.log(sendMessage({
//   recipient: "Stephen",
//   eventName: "Graduation",
//   toNumber: "+XXXXXXXXXXX",
//   eventDate: "1991-01-20"
// }));
