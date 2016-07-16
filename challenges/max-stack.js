/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.size = 0;
	this.storage = {};
}

Stack.prototype.push = function(data) {
	let size = this.size++;

	return this.storage[size] = data;
}

Stack.prototype.pop = function(data) {
	let size = this.size,
			deletedData;

	// If there is data in the storage, then you can pop
	if (size) {
		deletedData = this.storage[size];

		delete this.storage[size];

		// Update position in storage
		this.size--;

		return deletedData;
	}
}

Stack.prototype.getMax = function(data) {
	let size = this.size,
			highestNumber = 0,
			current = 0;

	// If there is any data in storage, continue to while loop
	if (size) {

		// While current position is smaller than storage size,
		// compare value of current position to highestNumber
		while (current < size) {
			if (highestNumber > this.storage[current]) {

				// Grab the highest compared value if applicable
				highestNumber = this.storage[current];
			}

			// Increment current position until there are no more
			// values to iterate through
			current++;
		}
	}

	return highestNumber;
}

module.exports = Stack;