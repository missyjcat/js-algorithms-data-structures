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
    this.mergeSort = mergeSort; // need to study up on this a little more..
    this.quickSort = quickSort;
    this.bucketSort = bucketSort;

    /**
     * Search algs
     */
    this.seqSearch = seqSearch;
    this.binarySearch = binarySearch;

    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = i; // Not sure why we don't just initialize
                               // `this.dataStore` w/ `new Array(numElements)`
    }
};

var setGaps = function(arr) {
    this.gaps = arr;
};

var setData = function(max) {

    max = max || this.numElements;

    // For each number of elements, store a random number between 0 and the
    // `numElements` value + 1 and make sure they are whole integers
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (max + 1));
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

/**
 * O(n^2) average and worst case; memory O(1)
 */

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

/**
 * O(n^2) running time
 * Insertion sort basically compares an element with the one next to it and if
 * it is found to be greater, moves over all the elements to the right and then
 * inserts the original value (which is the smallest) at the position of inner
 * after it has finished decrementing. This way, the smaller ones are inserted
 * earlier and earlier into the list.
 */

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
 *
 * The best case for gap sets is 701, 301, 132, 57, 23, 10, 4, 1, but for
 * this one we're just going to use [5,3,1] becaues our dataset is small.
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
            currPos = this.dataStore[i];

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

/**
 * Mergesort merges two sorted sublists to form a large sorted list. Space
 * problem with large datasets: storing two large sublists.
 *
 * Javascript doesn't handle recursive top-down mergesort well because the
 * levels go too deeply. Instead, will implement bottom-up using iteration.
 *
 * Bottom-up: Break down data into 1-element arrays and slowly merge and sort
 *
 * O(n log n) in worst case
 */

var mergeSort = function() {
    var arr = this.dataStore;
    if (arr.length < 2) {
        return;
    }

    var step = 1,
        left,
        right;

    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
};

/**
 * Utility func to merge sorted sublists back into master list
 * @param  {Array} arr        Master array to get values from/merge back
 * @param  {Number} startLeft  Index of where to start the left array
 * @param  {Number} stopLeft   Index of where to stop left array
 * @param  {Number} startRight Index of where to start right array
 * @param  {Number} stopRight  Index of where to stop right array
 * @return {None}            Operation done in place
 */
var mergeArrays = function(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1),
        leftArr = new Array(stopLeft - startLeft + 1),
        k = startRight,
        i = 0,
        m = 0,
        n = 0;

    for (i = 0; i < (rightArr.length - 1); i++) {
        rightArr[i] = arr[k];
        k++;
    }

    k = startLeft;

    for (i = 0; i < (leftArr.length - 1); i++) {
        leftArr[i] = arr[k];
        k++;
    }

    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;

    for (k = startLeft; k < stopRight; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }

    print('left array: ' + leftArr);
    print('right array: ' + rightArr);
};

/**
 * Pick a pivot to divide the list (in this impl, the first array el), reorder
 * the list so els less than pivot are placed before, greater than after
 * Repeat with the list of smaller and the list of larger els
 *
 * This one's a little easier to understand than the merge sort process...
 *
 * O(n log n) in average case, O(n^2) in worst case. Memory O(logN)
 */

var quickSort = function(list) {
    if (list.length === 0) {
        return [];
    }

    var lesser = [],
        greater = [],
        pivot = list[0], // Always choosing the first el in this recursive func
        i = 1;

    for (i = 1; i < list.length; i++) { // Starting with second el
        if (list[i] > pivot) { // If the el is greater, put in greater array
            greater.push(list[i]);
        } else { // otherwise put in less than array
            lesser.push(list[i]);
        }
    }

    /**
     * I first did a lesser.push(pivot); before this return statement, thinking
     * it would just come back in the same position since it's the greatest in
     * the lesser array. Turns out that this caused too many recursions. This
     * is because the func will forever be sorting because the last pivot will
     * always be put into the greater array, and the sorting will start over
     * again.
     */
    return quickSort(lesser).concat(pivot, quickSort(greater));
};

/**
 * Bucket sort wasn't in the DSAJS book, but I read about it and wanted to
 * include its implementation here.
 *
 * Good for a limited range of values (domain) with lots of elements. Otherwise
 * Quicksort or Mergesort is better.
 */

var bucketSort = function(domainMin, domainMax) {

    var insertionSort = function(arr) {
        var tmp = null,
            inner = null,
            outer = null;

        for (outer = 1; outer < arr.length; outer++) {
            tmp = arr[outer];
            inner = outer;
            while (inner > 0 && arr[inner - 1] >= tmp) {
                arr[inner] = arr[inner - 1];
                inner--;
            }
            arr[inner] = tmp;
        }

        return arr;
    };

    var i = 0,
        buckets = [],
        array = this.dataStore,
        sortedArray = [];

    domainMin = domainMin || 0;
    domainMax = domainMax || array.length;

    /**
     * Could maybe improve this by defining bucket sizes if the domain spans
     * more than 10, 100, 1000, 10000, etc.
     *
     * Then we would store the array values in the buckets according to their
     * values. Eg, if the buckets were buckets[0], buckets[10], buckets[20]
     * and so on, and there were 2M elements with a domain between 0-200, the
     * elements would be bucketed if the value was between 0 and 10, 11 and 20,
     * etc. And then they would be sorted within each bucket upon insertion.
     * So insertion of 2M elements in array is O(1) time, but sorting each time
     * is O(n log n) if we use quickSort so this would still be an O(n^2)
     * right?
     */
    for (i = domainMin; i <= domainMax; i++) {
        buckets[i] = [];
    }

    for (i = 0; i < array.length; i++) {
        buckets[array[i]].push(array[i]);
    }

    for (i = 0; i < buckets.length; i++) {
        sortedArray = sortedArray.concat(buckets[i]);
    }

    this.dataStore = sortedArray;

};

/**
 * Sequential search is a brute force method that takes O(n) time.
 */

var seqSearch = function(data) {
    var i = 0;

    for (i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === data) {
            return i;
        }
        return false;
    }
};

/**
 * Other ways to search data, maybe using binary tree or hashtable or linked
 * list.
 */

/**
 * If the data is sorted, binary search is better. Takes O(log n) time.
 */

var binarySearch = function(data) {
    var upperBound = this.numElements - 1,
        lowerBound = 0,
        array = this.dataStore,
        mid = null;

    /**
     * 
     */
    while (lowerBound <= upperBound) {

        /**
         * First find the middle of our current segment defined by upper- and
         * lowerBound.
         */
        mid = Math.floor((upperBound + lowerBound) / 2);
        print(mid);

        /**
         * If this middle point is less than the desired data, set the new
         * lowerBound to this middle point + 1 since we know that the desired
         * data is somewhere above this point (and not equal to it)
         */
        print(array[mid]);
        if (array[mid] < data) {
            lowerBound = mid + 1;
        } else
        /**
         * If the middle point is greater than, set the upperBound to the mid
         * minus 1 because we know that the data is somewhere below the mid and
         * not the mid
         */
        if (array[mid] > data) {
            upperBound = mid - 1;
        } else {

            /**
             * In this case we have found the data and should return the index
             * which is the mid (array[mid] === data)
             */
            return mid;
        }
    }
    return -1; // data cannot be found at all
};
