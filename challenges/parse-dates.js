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

var days = {'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6, 'Sunday':7}
var months = {'Jan': 1, 'Feb':2, 'Mar':3, 'Apr':4,'May':5,'Jun':6,'Jul':7,'Aug':8,'Sep':9,'Oct':10,'Nov':11,'Dec':12}
function parseDates(str) {
	var today = new Date();
	var todayDay = today.getDay();
	var todayDate = today.getDate();
	var todayMonth = today.getMonth();
 	var targetYear = today.getFullYear();
 	console.log(targetYear);
	var targetMonth;
	var targetDate;
	var targetDay;
	var targetHours;
	var targetMins;
	var strArr = str.split(' ');
	//time
	targetHours = parseInt(strArr[strArr.length-2].slice(0,-3));
	console.log(targetHours);
	targetMins = parseInt(strArr[strArr.length-2].slice(-2))
	// month-date format
	if(strArr[strArr.length-1] === 'PM') targetHours+=12;
	
		if(strArr[0].length ===3){
		targetMonth = months[strArr[0]];
		targetDate = parseInt(strArr[1].slice(0,-2));
	}
	// day of week format
	else{
		targetMonth = todayMonth;
		targetDay = days[strArr[0]];
		targetDate = todayDate - (todayDay-targetDay);
	}
	console.log(targetDate);
	console.log(targetYear,targetMonth,targetDate,targetHours,targetMins);
	return new Date(targetYear,targetMonth,targetDate,targetHours,targetMins);
}

module.exports = parseDates;
