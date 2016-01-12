var moment = require('moment-timezone');


module.exports = function(date){
	var birthday = date;

	var todayMonth = moment.tz(Date.now(),"America/Los_Angeles").month();
	var todayDay = moment.tz(Date.now(),"America/Los_Angeles").date();
	var eventDateMonth = moment.tz(birthday, "America/Los_Angeles").month();
	var eventDateDay = moment.tz(birthday, "America/Los_Angeles").date()+1;

	console.log('todayMonth, todayDay, eventDateMonth, eventDateDay')
	console.log(todayMonth, todayDay, eventDateMonth, eventDateDay)

	// Check if month is in past, same, future
	if(eventDateMonth < todayMonth){
		return moment.tz(birthday, "America/Los_Angeles").year(moment.tz(Date.now(),"America/Los_Angeles").year()+1).fromNow();

	} else if (eventDateMonth === todayMonth){
		if(eventDateDay < todayDay){
		return moment.tz(birthday, "America/Los_Angeles").year(moment.tz(Date.now(),"America/Los_Angeles").year()+1).fromNow();	

		} else if (eventDateDay === todayDay){
		return 'today'
		} else if (eventDateDay > todayDay){
		return moment.tz(birthday, "America/Los_Angeles").year(moment.tz(Date.now(),"America/Los_Angeles").year()).fromNow();
		}
	} else if (eventDateMonth > todayMonth){
		return moment.tz(birthday, "America/Los_Angeles").year(moment.tz(Date.now(),"America/Los_Angeles").year()).fromNow();

	}
}

