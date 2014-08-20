/**
 * This function takes an array element and converts it to a string and adds
 * "maggie" to it, however many times the value of the element.
 */

function maggiefy(num) {
    var newEl = num;
    var i = 0;
    while (i < num) {
        newEl += ' maggie';
        i++;
    }

    return newEl;
}

/**
 * The `map()` method takes each element of the array and performs the given
 * function passed to it on each element, then returns a new array with the
 * result of the function for each element
 */

var nums = [1,2,3,4];
var maggieNums = nums.map(maggiefy);
print(maggieNums);