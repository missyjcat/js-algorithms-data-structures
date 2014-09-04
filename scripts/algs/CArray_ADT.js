

/**
 * Array test bed to help implement sorting algs
 */

var CArray = function(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    /**
     * Simple sorting algs
     */
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;

    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = i; // Not sure why we don't just initialize
                               // `this.dataStore` w/ `new Array(numElements)`
    }
};

var setData = function() {

    // For each number of elements, store a random number between 0 and the
    // `numElements` value + 1 and make sure they are whole integers
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
};

var clear = function() {
    // Stores zeroes in all the elements of the array
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
};

var insert = function(el) {
    // Stores the element at the current pos and increments the position.
    this.dataStore[this.pos++] = el;
};

var toString = function() {
    var output = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        output += this.dataStore[i] + ' ';
        
        // If the current position is divisible by 10, return the next outputs
        // on a new line
        if ((i > 0) && (i % 10 === 0)) {
            output += '\n';
        }
    }
    return output;
};

var swap = function(arr, index1, index2) {
    // Stash the first value
    var temp = arr[index1];

    // Make the swap
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

/**
 * Bubble sort algorithm - least efficient, simple
 * O(n^2) complexity
 */

var bubbleSort = function() {
    var numElements = this.numElements,
        tmp = null,
        outer = null,
        inner = null;

    if (numElements < 2) {
        return;
    }

    /**
     * Set outer to number of elements and decrement for each pass
     */
    
    for (outer = numElements; outer >= 2; outer--) {
        
        /**
         * Set inner to zero and loop until inner reaches outer - 1
         */
        
        for (inner = 0; inner <= (outer - 1); inner++) {
        
            /**
             * For each element in the dataStore up until the current outer
             * position, swap the positions if the current number is greater
             * than the one to its right so that we have a list in ascending
             * order.
             */
        
            if (this.dataStore[inner] > this.dataStore[inner+1]) {
                swap(this.dataStore, inner, inner+1);
            }
        }
        print(this.toString());
    }
};


var selectionSort = function() {
    var min = null,
        tmp = null,
        outer = null,
        inner = null;

    for (outer = 0; outer <= this.numElements; outer++) {

    }
};