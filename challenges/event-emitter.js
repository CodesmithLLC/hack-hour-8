'use strict';
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

  this.listeners = {};
  this.on = function(event, func) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
      this.listeners[event].push(func);
    }else{
      this.listeners[event].push(func); 
    }
  }

  this.trigger = function(eve) {
    var args = [...arguments].slice(1)
    this.listeners[eve].forEach(function(ele, idx){
      ele(...args);
    })
  }

}

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
  // counter++;
// }); // counter should be 0
// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2
// instance.trigger('increment'); // counter should be 2

// console.log(counter);
module.exports = EventEmitter;
