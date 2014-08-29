var HashTable = function() {
    this.table = new Array(137); // Using 137 as the first prime number greater
                                 // than 100 which helps to prevent collision

    this.simpleHash = simpleHash; // Starting with a simple hash function to
                                  // show that this may not be enough to
                                  // prevent collision
    
    this.betterHash = betterHornersHash;

    this.showDistro = showDistro; // print the hash table

    this.put = put;

    this.get = get;
};

/**
 * Add the character codes of each character in given string and modulo by
 * the length of the table array
 * @param {String} data - string
 * @return {Number}
 */

var simpleHash = function(data) {
    var total = 0,
    i = 0;

    for (i = 0; i<data.length; i++) {
        total += data.charCodeAt(i);
    }

    return total % this.table.length;
};

/**
 * This is a hash function developed by Horner that prevents collisions more
 * effectively
 */

var betterHornersHash = function(data) {
    var total = 0,
        i = 0,
        H = 31; // a small-ish prime number as a constant multiplier

    for (i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
    }

    // Accounting for if total ends up being 0
    if (total < 0) {
        total += this.table.length - 1; // Why this?
    }

    total = total % this.table.length;
    return parseInt(total, 10);
};

/** 
 * Put an element into the hash table
 * @param {String} data - string to add to hash table
 */

var put = function(key, data) {
    // process the simpleHash to come up with the index of the new entry
    var index = this.betterHash(key);
    this.table[index] = data;
};

/**
 *  Retrieves an element using the hash function
 * @param {String} key
 * @return {String} data 
 */

var get = function(key) {
    return this.table[this.betterHash(key)];
};

var showDistro = function() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            print(i + " : " + this.table[i]);
        }
    }
};



