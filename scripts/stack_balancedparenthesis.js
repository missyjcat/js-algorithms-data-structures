load('scripts/stack_ADT.js');

/**
 * Idea: 
 * When encounter an open parenthesis, store index in a stack. When encounter a
 * closed paren, pop off the stack;
 */

/**
 * Takes an expression as a string and returns the positions of open parens
 * @param {String} exp - an expression that can be evaluated
 * @return {String} - comma deliminated string of positions where open parens
 *      are present
 */

var isThereMisMatchedParens = function(exp) {
    var checkStack = new Stack(),
        i = 0,
        output = [];
    
    for (i = 0; i < exp.length; i++) {
        if (exp[i] === '(') {
            checkStack.push(i);
        }

        if (exp[i] === ')') {
            checkStack.pop();
        }
    }
    if (checkStack.length()) {
        while (checkStack.length() > 0) {
            output.push(checkStack.pop());
        }
        return output.toString();
    } else {
        return false;
    }
};

print("passing in 5 + (9 + 5) + (4 + (6 + 8) : ");
print (isThereMisMatchedParens('5 + (9 + 5) + (4 + (6 + 8)'));

print("passing in 5 + (9 + 5) + (4 + (6 + 8) + (8 + (9 + 10 + 11): ");
print (isThereMisMatchedParens('5 + (9 + 5) + (4 + (6 + 8) + (8 + (9 + 10 + 11)'));

print("passing in 5 + (9 + 5): ");
print (isThereMisMatchedParens('5 + (9 + 5)'));