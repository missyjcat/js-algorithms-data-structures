/**
 * Algorithm to compute the factorial of any number
 */

/** Recursive version **/
var factorial = function(n) {
    if (n === 0) { return 1; }

    // Multiple the arg by this function, which multiplies arg - 1 by this
    // function, which multiplies that arg - 1, etc. Until n is zero, in which
    // case that last round is multiplied by 1.
    return n * factorial(n - 1);
};

print('factorial of 5! using recursive function is: ' + factorial(5));

/** Iterative version **/
var factorialIt = function(n) {
    var output = n;
    while (n>1) {
        output *= n - 1;
        n--;
    }

    return output;
};

print('factorial of 5! using iterative function is: ' + factorialIt(5));

/** Using a stack **/

load('scripts/stack_ADT.js');

var factorialStack = function(n) {
    var stack = new Stack(),
        output = 1;
    while (n>1) {
        stack.push(n--);
    }

    while (stack.length() > 0) {
        output *= stack.pop();
    }

    return output;
};

print('factorial of 5! using stack function is: ' + factorialStack(5));