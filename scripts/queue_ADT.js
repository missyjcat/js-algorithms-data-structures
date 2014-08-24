/**
 * A queue follows FIFO ordering. Elements go in and when dequeued they come
 * out in the order they went in.
 */

var Queue = function() {
    this.dataStore = [];
    this.dequeue = dequeue;
    this.enqueue = enqueue;
    this.length = length;
    this.clear = clear;
    this.front = front;
    this.back = back;
    this.isEmpty = isEmpty;
    this.toString = toString;
};

var enqueue = function(val) {
    this.dataStore.push(val);
};

var dequeue = function() {
    return(this.dataStore.shift());
};

var length = function() {
    return this.dataStore.length;
};

var clear = function() {
    this.dataStore.length = 0;
};

var front = function() {
    return this.dataStore[0];
};

var back = function() {
    return this.dataStore[this.length() - 1];
};

var isEmpty = function() {
    if (this.length === 0) {
        return true;
    } else {
        return false;
    }
};

this.toString = function() {
    return this.dataStore.toString();
};