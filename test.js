var moment = require('moment');


module.exports = function(date){
	var birthday = date;

	var todayMonth = moment(Date.now()).month();
	var todayDay = moment(Date.now()).day();
	var eventDateMonth = moment(birthday).month();
	var eventDateDay = moment(birthday).day();

	// Check if month is in past, same, future
	if(eventDateMonth < todayMonth){
		return 'in ' + moment(eventDate).year(moment(Date.now()).year()+1).fromNow();

	} else if (eventDateMonth === todayMonth){
		if(eventDateDay < todayDay){
		return 'in ' + moment(eventDate).year(moment(Date.now()).year()+1).fromNow();	

		} else if (eventDateDay === todayDay){
		return 'today'
		} else if (eventDateDay > todayDay){
		return 'in ' + moment(eventDate).year(moment(Date.now()).year()).fromNow();
		}
	} else if (eventDateMonth > todayMonth){
		return 'in ' + moment(eventDate).year(moment(Date.now()).year()).fromNow();

	}
}

