/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  // store events into an object closure
  // if it does not exist, add to closure and return closure func
  // save IIF for trigger
  var eventObj = {};

  this.on = function(eventName, callback){
    if(eventObj[eventName]){
      return eventObj[eventName]
    } else {
    eventObj[eventName] = callback;
    }
  }

  this.trigger = function (argumentInput){
    let funcToCall = eventObj[arguments[0]];
    return funcToCall();
  }
}

module.exports = EventEmitter;
var instance = new EventEmitter();
var counter = 0;
 instance.on('increment', function() {
   counter++;
 }); // counter should be 0
 instance.trigger('increment'); // counter should be 1
 instance.trigger('increment'); // counter should be 2
console.log(counter)
