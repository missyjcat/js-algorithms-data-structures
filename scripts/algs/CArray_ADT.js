

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
    this.gaps = [5,3,1];
    this.setGaps = setGaps;

    /**
     * Simple sorting algs
     */
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;

    /**
     * Advanced sorting algs
     */
    this.shellSort = shellSort;

    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = i; // Not sure why we don't just initialize
                               // `this.dataStore` w/ `new Array(numElements)`
    }
};

var setGaps = function(arr) {
    this.gaps = arr;
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

    if (this.numElements < 2) {
        return;
    }

    /**
     * Starting with 0, increment the min variable for each pass up until 2
     * before the length of the array (since we won't need to do a swap with
     * the very last element -- everything will be sorted by then).
     */
    for (outer = 0; outer <= this.numElements - 2; outer++) {

        min = outer;

        /**
         * For this value of outer, make the inner value one more than the
         * outer (to test all elements AFTER the ones we've already tested)
         * and go until the end of the array. If any element is less than the
         * current (the min/outer) indexed element, set the min index to that
         * inner and swap the outer with the min. Continue looping.
         */

        for (inner = outer + 1; inner <= this.numElements - 1; inner++) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
            // print('this is outer: ' + outer + ' | this is min: ' + min + ' | this is inner: ' + inner);
            
            
        }

        print(this.toString());

    }
};

var insertionSort = function() {
    var tmp = null,
        inner = null,
        outer = null;

    for (outer = 1; outer < this.numElements; outer++) {
        tmp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && this.dataStore[inner - 1] >= tmp) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            inner--;
        }
        this.dataStore[inner] = tmp;
        print(this.toString());
    }
};

/**
 * Shellshort is based on insertion sort but improved. Defines a gap distance
 * that determines how far apart the elements to be compared should be. 
 * Comparing elements that are far apart is more efficient than always
 * comparing adjacent elements.
 */

var shellSort = function() {
    var i,
        j,
        g,
        currPos,
        currentGap,
        compareEl;

    /**
     * First, loop through the gaps
     */
    for (g = 0; g < this.gaps.length; g++) {
        currentGap = this.gaps[g];

        /**
         * Starting at the current gap value, loop through the dataStore
         */
        for (i = currentGap; i < this.numElements; i++) {

            /**
             * Stash the value of the current position
             */
            curPos = this.dataStore[i];

            /**
             * i is iterating one by one through the datastore
             * j is starting at i which is increasing, and decreases by the
             * currentGap with each iteration until j is greater than or equal
             * to the currentGap (this would happen if i gets to be almost
             * double the currentGap) and when the element we're looking at
             * (j - currentGap, or the compareEl) is greater than the current
             * position. If this is the case, then put the greater element
             * later in the array (this.dataStore[j]).
             */
            for (j = i; (j >= currentGap) && (this.dataStore[j - currentGap] > currPos); j -= currentGap) {
                compareEl = this.dataStore[j - currentGap];
                this.dataStore[j] = compareEl;
            }

            /**
             * Once the loop is complete, the current position should be the
             * lowest element of all compared, and so should be assigned the
             * highest index (j)
             */
            this.dataStore[j] = currPos;
        }
        print(this.toString());
    }
};