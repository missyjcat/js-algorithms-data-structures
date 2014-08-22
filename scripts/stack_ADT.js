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