load('scripts/hashing_ADT2.js');

var putNumbers = new HashTable(),
    myName = null,
    number = null;

while (myName !== 'finished') {
    putstr('Enter a name or type in "finished" when done: ');
    myName = readline();
    if (myName === "finished") {
        break;
    }

    putstr('Enter a number: ');
    number = readline();
    putNumbers.put(myName, number);
}

myName = '';
putstr('Enter the name to get the number (or "quit" to quit): ');
while (myName !== 'quit') {
    myName = readline();
    if (myName === 'quit') {
        break;
    }
    print('the number for ' + myName + ' is: ' + putNumbers.get(myName));
    putstr('Enter the name to get the number (or "quit" to quit): ');
}

