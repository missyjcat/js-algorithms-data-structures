load('scripts/algs/CArray_ADT.js');

/**
 * Bubble sort test
 */

print('Testing bubble sort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.bubbleSort();
print();
print(mynums.toString());
print();

print('Testing selection sort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.selectionSort();
print();
print(mynums.toString());

print('Testing insertion sort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.insertionSort();
print();
print(mynums.toString());

print('Testing shellsort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.shellSort();
print();
print(mynums.toString());