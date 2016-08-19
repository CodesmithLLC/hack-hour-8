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

 /*
  Approach: EventEmitter is an object with 'on' and 'trigger' methods.
  'on' accepts an 'event' string as the first argument and a function as a second argument that will be invoke if that 'event is triggered.
  'on' method can be called multiple times to add multiple events and also to add multiple functions to be invoked to a single 'event'.
  'trigger' will accept an 'event' string as the first argument and pass additional arguments to the listener 'on' function(s).
  Create an 'event' object that saves each 'on' event as a key and stores the function in an array.
  The 'trigger' method will look up the 'event' in the event object and invoke all the functions in the array (passing in any additional arguments into those functions)
 */

function EventEmitter() {
	this.events = {};
}

EventEmitter.prototype.on = function(){

}

EventEmitter.prototype.trigger = function(){

}

 // var instance = new EventEmitter();
 // var counter = 0;
 // instance.on('increment', function() {
 //    counter++;
 // }); // counter should be 0
 
 // instance.trigger('increment'); // counter should be 1
 // instance.trigger('increment'); // counter should be 2

module.exports = EventEmitter;
