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
	this.funcStore = {};
	this.funcFreq = {};
	this.on = function(name, func) {
		this.funcStore[name] = func;
		if(this.funcFreq[name]) this.funcFreq[name]++;
		else this.funcFreq[name] = 1;
	};

	this.trigger = function(name, ...args) {
		var times = this.funcFreq[name];
		for(var i = 0; i < times; i++){
			this.funcStore[name](args);
		}
	};
}

module.exports = EventEmitter;
