// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)
// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.
// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:
// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date

function parseDates (dateString){
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	var year, month, day, hour, minute;
	firstLetters = dateString.substring(0,3);
	
	//get current time and initiliazes the year-- WORKS
	currentTime = new Date();
	year = currentTime.getFullYear();
	
	
	
	//if today, then find current date --WORKS
	if(firstLetters === 'Tod') {
		// returns the month (from 0 to 11)
		month = currentTime.getMonth();

		// returns the day of the month (from 1 to 31)
		day = currentTime.getDate() -1;
	}
	//if a month, has to find that day of the week --WORKS
	else if(months.indexOf(firstLetters) !== -1){
		month = months.indexOf(firstLetters);
		day = parseInt(dateString.substr(4,2))-1;
	}
	//if a day, has to find the last occurence
	else if(days.indexOf(firstLetters) !== -1){
		var currentDay = currentTime.getDay();
		var testDay = days.indexOf(firstLetters);
		if(currentDay-1 === testDay){
			currentTime.setDate(currentTime.getDate() - 7);
		}
		else {
			var dayDiff = currentDay-1 - testDay;
			if (dayDiff < 0) dayDiff +=7;
			currentTime.setDate(currentTime.getDate() - dayDiff);
		}
		month = currentTime.getMonth();
		day = currentTime.getDate()-1;

	}
	
	//parse for hours and minutes --WORKS
	minute = parseInt(dateString.substr(dateString.indexOf(':')+1, 2));
	hour = parseInt(dateString.substr(dateString.indexOf(':')-2, 2));


	//AM or PM --WORKS
	if(dateString.match('PM')) hour += 12;
	//make date object in the end (automatically determines invalid date)
	
	var date = new Date(year, month, day, hour, minute);
	
	//returns current time if invalid, otherwise date entered
	if(isNaN( date.getTime() )) return currentTime;
	else return date;
}

module.exports = parseDates;
