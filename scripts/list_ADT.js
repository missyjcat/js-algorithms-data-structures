var List = function() {
    this.listSize = 0;
    this.pos = 0;
    this.length = length;
    this.clear = clear;
    this.toString = toString;
    this.getElement = getElement;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.dataStore = [];
    this.find = find;
    this.contains = contains;
};

function length() {
    return this.listSize;
}

function clear() {
    this.listSize = 0;
    this.dataStore.length = 0;
    this.pos = 0;
}

function toString() {
    return this.dataStore;
}

function getElement(pos) {
    return this.dataStore[this.pos];
}

function insert(val, after) {
    var pos = this.find(after);
    if (pos > -1) {
        this.dataStore.spliace(pos + 1, 0, val);
        this.listSize++;
        return true;
    }

    return false;
}

function append(val) {
    this.dataStore[this.listSize] = val;
    this.listSize++;
}

function find(val) {
    var i = 0;
    for (i = 0; i<this.dataStore.length; i++) {
        if (this.dataStore[i] == val) {
            return i;
        }
    }

    return -1;
}

function remove(val) {
    var index = _find(val);
    if (index > -1) {
        this.dataStore.splice(index, 1);
        this.listSize--;
        return true;
    }

    return false;
}

function front() {
    this.currPos = 0;
}

function end() {
    this.currPos = this.listSize - 1;
}

function previous() {
    return this.dataStore[this.pos--];
}

function next() {
    return this.dataStore[this.pos++];
}

function hasPrevious() {
    /** If the position is at 0, there are no previous **/
    if (this.pos === 0) {
        return false;
    }

    return true;
}

function hasNext() {
    /** If the position is at the length of the store - 1, there is no next **/
    if (this.pos >= this.listSize - 1) {
        return false;
    }

    return true;
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function contains(val) {
    var i = 0;
    for (i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == val) {
            return true;
        }
    }

    return false;
}