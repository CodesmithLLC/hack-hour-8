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
	this.cache = {};
}

EventEmitter.prototype.on = function(name, callback){
	if(this.cache[name]) this.cache[name].push(callback);
	else this.cache[name] = [callback];
}

EventEmitter.prototype.trigger = function(name){
	var args = arguments;
	if(this.cache[name]){
		this.cache[name].forEach(func => {
			func(args);
		});
	}
}
module.exports = EventEmitter;
