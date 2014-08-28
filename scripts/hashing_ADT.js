var HashTable = function() {
    this.table = new Array[137]; // Using 137 as the first prime number greater
                                 // than 100 which helps to prevent collision

    this.simpleHash = simpleHash; // Starting with a simple hash function to
                                  // show that this may not be enough to
                                  // prevent collision
    
    this.showDistro = showDistro; // print the hash table

    this.put = put;

    // this.get = get;
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