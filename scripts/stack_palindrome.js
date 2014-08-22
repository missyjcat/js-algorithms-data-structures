/**
 * Given a string, determine if it is a palindrome or not
 */

/**
 * Idea: pass each letter of the string into a new stack. Then pop each letter
 * and make sure that each letter is equal to each letter of the original
 * string.
 */

load('scripts/stack_ADT.js');
var string1 = 'racecar';
var string2 = 'trotter';
var string3 = 't';
var string4 = 'tot';
var string5 = 'malindrome';

var compareFunc = function(string) {
    var compareStack = new Stack(),
        i = 0;
    
    for (i = 0; i < string.length; i++) {
        compareStack.push(string[i]);
    }

    for (i = 0; i < string.length; i++) {
        var popped = compareStack.pop();
        if (string[i] !== popped) {
            return false;
        }
    }

    return true;

};

print(compareFunc(string1));
print(compareFunc(string2));
print(compareFunc(string3));
print(compareFunc(string4));
print(compareFunc(string5));