/**
 * Recursive version of Fibonacci calculation, not efficient
 */

var recursiveFib = function(num) {
    if (num < 2) {
        return num;
    }

    return recursiveFib(num - 1) + recursiveFib(num - 2);
};

print(recursiveFib(20));

var dynFib = function(num) {
    if (num < 2) {
        return num;
    }

    var store = [0, 1],
        pointer = 2,
        curr = null,
        i = 0,
        total = 0;

    while (pointer !== num) {
        store.push(store[pointer-1] + store[pointer-2]);
        ++pointer;
    }

    total = store[store.length - 1] + store[store.length - 2];

    return total;
};

print();
print(dynFib(100));

