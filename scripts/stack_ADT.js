/**
 * A stack is a list that is only accessible from one end of the list (called
 * the `top`) and is an example of a LIFO data structure.
 */

var Stack = function() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.clear = clear;
};

var push = function(el) {
    this.dataStore[this.top++] = el;
};

var pop = function() {
    return this.dataStore[--this.top];
};

var peek = function() {
    return this.dataStore[this.top - 1];
};

var clear = function() {
    this.top = 0;
    this.dataStore.length = 0;
};

var length = function() {
    return this.top;
};

var jess = new Stack();
jess.push('hi');
jess.push('ho');
jess.push('hum');
print('peek at jess ' + jess.peek());
jess.pop();
print('popped one, and now ' + jess.peek());
print('jess length ' + jess.length());
print('jess top ' + jess.top);
print('jess popping this: ' + jess.pop());
jess.clear();
print('cleared and now ' + jess.length());
print('peeking: ' + jess.peek());