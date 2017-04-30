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

function parseDates(str) {
    /*
    Approach: Check first if input is in day form, month form or invalid.  If 
    invalid, return current day/time.  If input is in valid day form, check 
    input against array containing days, immediately followed by day info 
    required by Date obj (dates of last occurence of that day as specified 
    in challenge).  If indexOf item in array > -1 in string,
    grab number immediately after, pass in to date obj as date to be returned.

    Use similar logic with month/date input, use charChodeAt and substring 
    to determine if string contains 2-digit date or 1-digit date, pass that
    info into date object. 
    
    How would I handle date if I had the time?  substring that portion of the 
    input, check charCode to see if I had 2-digit number or 1-digit number, 
    if PM, add 12 hours to number, pass in time to date object as done with
    day, month, date below. 
    
    */
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Today'];
  let months = ['Jan', 0, 'Feb', 1, 'Mar', 2, 'Apr', 3, 'May', 4, 'Jun', 5, 'Jul', 6, 'Aug', 7, 'Sep', 8, 'Oct', 9, 'Nov', 10, 'Dec', 11];
  let lastWeek = ['Monday', 18, 'Tuesday', 19, 'Wednesday', 20, 'Thursday', 21, 'Friday', 15, 'Saturday', 16,  'Sunday', 17, 'Today', 22];
let d; 
 let dayTest = false, monthTest = false; 
    for (var i = 0; i < days.length; i++){
        if (str.indexOf(days[i]) > -1){
            console.log(i);
            dayTest =  true; 
        }
    }
  for (var j = 0; j < months.length; j++){
        if (str.indexOf(months[j]) > -1){
            console.log(j);
            monthTest =  true; 
        }
  }
  if (dayTest === false && monthTest === false){
    return Date(); 
  }
  if (dayTest === true){
    for (var k = 0; k < lastWeek.length; k += 2){
        if (str.indexOf(lastWeek[k]) > -1){
            d = new Date();
            d.setDate(lastWeek[k+1]);
            return d; 
        }
    }
  }
  if (monthTest === true){
    console.log('inside');
    for (var l = 0; l < months.length; l += 2){
        if (str.indexOf(months[l]) > -1){
            console.log('months', months[l+1]);
            d = new Date();
            d.setMonth(months[l+1]);
            console.log('d', d);
            if(str.charCodeAt(5) > 48 && str.charCodeAt(5) < 58){
                console.log('inout', months[l+1]);
                d.setDate(parseInt(str.substring(4,6))); 
                return d; 
            }
            else {
                d.setDate(parseInt(str.substring(4,5))); 
                return d; 
            }
    }
  }

console.log('dayTest', dayTest); 
}
}


module.exports = parseDates;
