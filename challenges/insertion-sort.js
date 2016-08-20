// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

    for (var i = 1; i < array.length; i ++) {
        var current = array[i];
        var prev = array[i - 1]
        
        if (current >= prev) {
            continue;
        }
        
        for (var j = i; j > 0; j--) {
            start = array[j];
            prev = array[j - 1];
            
            if (prev > start ) {
                array[j] = prev;
                array[j - 1] = start;
            }
        }
    }
    
    return array;
}

module.exports = insertionSort;