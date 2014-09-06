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
print();

print('Testing insertion sort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.insertionSort();
print();
print(mynums.toString());
print();

print('Testing shellsort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.shellSort();
print();
print(mynums.toString());
print();

print('Testing mergesort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.mergeSort();
print();
print(mynums.toString());
print();

print('Testing quickSort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.dataStore = quickSort(mynums.dataStore);
print();
print(mynums.toString());
print();