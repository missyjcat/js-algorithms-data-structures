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

/**
 * Computing values in two-dimensional arrays is a matter of visualizing rows
 * and columns of the matrix and deciding what order to iterate through them.
 */

var twoDimArray = [[1,2,3], [4,5,6], [7,8,9]];

/** 
 * This is a row by row implementation that enters a row, then loops through
 * each column value and outputs a flattened version of the given array in that
 * order. In this case, it would output [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

Array.rowByRowFlattenArray = function(array) {
    var row = 0,
        col = 0,
        output = [];

    for (row = 0; row < array.length; row++) {
        for (col = 0; col < array[row].length; col++) {
            output.push(array[row][col]);
        }
    }

    return output;
};

var rowByRow = Array.rowByRowFlattenArray(twoDimArray);
print(rowByRow.toString());

/** 
 * This is a col by col implementation that enters a col, then loops through
 * each row value (down) and outputs a flattened version of the given array in 
 * that order. In this case, it would output [1, 4, 7, 2, 5, 8, 3, 6, 9]
 */

Array.colByColFlattenArray = function(array) {
    var row = 0,
        col = 0,
        output = [];

    for (col = 0; col < array.length; col++) {
        for (row = 0; row < array[col].length; row++) {
            output.push(array[row][col]);
        }
    }

    return output;
}

var colByCol = Array.colByColFlattenArray(twoDimArray);
print(colByCol.toString());