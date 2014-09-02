var newArray = Array.matrix(8, 8, 'hi');
newArray[7][7] = 'hello';
print(newArray[7][7]);
print(newArray[7][6]);
print(printArray(newArray));

var rowByRow = Array.rowByRowFlattenArray(twoDimArray);
print(rowByRow.toString());


var colByCol = Array.colByColFlattenArray(twoDimArray);
print(colByCol.toString());
