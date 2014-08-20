/** 
 * This is an accumulator function; it will take a total and add to it, then
 * return the result.
 */

function accumulateMe(totalSoFar, newVal) {
    return totalSoFar + newVal;
}

var numbers = [1,2,3,4,5,6];

/**
 * The `reduce()` method takes each element of an array and successively passes
 * the result of the first or previous iteration and the next element into a 
 * function. Then it returns the result at the end of the array.
 *
 * So this is doing:
 *  accumulateMe(1,2) -> 3
 *  accumulateMe(3,3) -> 6
 *  accumulateMe(6, 4) -> 10
 */
var total = numbers.reduce(accumulateMe);
print(total); /** Should be 21 **/