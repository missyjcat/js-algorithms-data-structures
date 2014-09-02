/**
 * Algorithm to determine if a string has all unique characters
 */

/** 
 * ASCII assumption: 128 possible characters, extended can rep 256; using
 * extended charset (unicode supports 100K+ chars)
 **/

/**
 * Checks if all chars are unique in a string. Time complx O(n); space complx
 * O(1)
 * @param {String} string - string to test
 * @return {Boolean} - true if all chars are unique
 */
var testUniqueChars = function(string) {
    
    /**
     * If the string is longer than the possible charset number, then it has
     * to repeat a char somewhere. So return false in this case
     */
    if (string.length > 256) {
        return false;
    }

    var cache = {},
        i = 0;

    /**
     * Otherwise, we can use an object to store the letters as we iterate
     * through the string, and then return false if we come across one we've
     * stored.
     */

     for (i = 0; i < string.length; i++) {
        if (cache[string[i]]) {
            return false;
        }

        cache[string[i]] = true;
     }

     return true;

};