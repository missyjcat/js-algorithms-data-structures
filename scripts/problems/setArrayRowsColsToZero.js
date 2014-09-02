/**
 * PROBLEM:
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire
 * row and column is set to 0.
 */

load('scripts/twoDimensionalArrays.js');



var zeroItOut = function(matrix) {

/**
 * First, create an array that tracks the rows of the MxN matrix and fill it
 * with zeroes. Do the same for the columns. We will set an index to 1 if we
 * find a zero in that corresponding position in the MxN matrix.
 */

    var rowsWithZeroes = [],
        colsWithZeroes = [],
        i = 0,
        j = 0;

/**
 * Iterate through the matrix and if we find a zero, update the row/column
 * tracking arrays accordingly.
 */

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rowsWithZeroes[i] = 1;
                colsWithZeroes[j] = 1;
            }
        }
    }

/**
 * Iterate through the matrix again and set any cells that are either in
 * one of the rows/columns that contain a zero.
 */

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (rowsWithZeroes[i] || colsWithZeroes[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return printArray(matrix);

};

/**
 * Testing this algorithm by printing out a before and after matrix
 */

var testMatrix = Array.matrix(8,8,1);
testMatrix[2][4] = 0;
print(printArray(testMatrix));

print(zeroItOut(testMatrix));