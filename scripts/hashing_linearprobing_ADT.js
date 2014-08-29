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

    // this.buildChains = buildChains;
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


// I think this is wrong. We are supposed ot be able to put based on key and
// data, not just data
// 
// Might address some confusion I have about the get function. I will do the
// reverse of the get in the put
// var put = function(data) {
//     // process the hash function to come up with the index of the new entry
//     var key = this.betterHash(data); // get the key as before
//     var index = 0; // set the incrementing var
//     if (this.table[key][0] == undefined) {
//         this.table[key][0] = data; // if the first index of the array at the
//                                    // key is undefined, use it to store the data
//     } else {
//         while (this.table[key][index] !== undefined) {
//             ++index; // otherwise, increment the index until we get to a
//                      // position at the key's array that is undefined
//         }
//         this.table[key][index] = data; // then store the data
//     }
// };

var put = function(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (typeof this.table[pos][0] === 'undefined') {
        this.table[pos][0] = key;
        this.table[pos][1] = data;
    } else {
        while (typeof this.table[pos][index] !== 'undefined') {
            ++index;
        }
        this.table[pos][index] = key;
        this.table[pos][index+1] = data;
    }
};

/**
 * Retrieves an element using the hash function
 * @param {String} key
 * @return {String} data 
 */

var get = function(key) { // key in this case is really the data?
    // need an explanation of why this works the way it does
   var index = 0;
   var pos = this.betterHash(key); // why is the position a result of the
                                   // hashed key? didn't we get the position
                                   // from the hashed data?
                                   // so hashed data = key = position
                                   // 
   if (this.table[pos][index] == key) {
      return this.table[pos][index+1];
   }
   else {
      while (this.table[pos][index] != key) {
         index += 2;
      }
      return this.table[pos][index+1];
   }
   return undefined;
};

/**
 * This has been modified from ADT2 to now sift through a two-dimensional array
 */

var showDistro = function() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i][0] !== undefined) {
            print(i + " : " + this.table[i].toString());
        }
    }
};

/**
 * Converts each empty index in our hash table to an array. Called before
 * adding elements to the hash table.
 */

var buildChains = function() {
    for (var i = 0; i < this.table.length; i++) {
        this.table[i] = [];
    }
};

/**
 * Separate chaining or linear probing? If the size of array can be up to half
 * the number of elements to be stored, use separate chaining. If size of array
 * can be twice size of elements to be stored, use linear probing. More slots.
 */