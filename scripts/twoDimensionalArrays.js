/**
 * Crockford's way of initializing a two-dimensional array without any
 * `undefined` elements
 */

Array.matrix = function(numRows, numCols, initialVal) {
    var newArr = [],
        i = 0,
        j = 0;

    /** 
     * For each row, create a new array that contains each "cell" which
     * represents each column in that row. Initialize each cell with the
     * `initialVal` and then save that array of columns back to the row we're
     * currently working on.
     *
     * Then return the array (of rows with arrays of column values).
     */
    for (i = 0; i < numRows; i++) {
        var cols = [];
        for (j = 0; j < numCols; j++) {
            cols[j] = initialVal;
        }
        newArr[i] = cols;
    }

    return newArr;
}

var newArray = Array.matrix(8, 8, 'hi');
newArray[7][7] = 'hello';
print(newArray[7][7]);
print(newArray[7][6]);