/** Linked List implementation **/

/**
 * Start with a single Node impl where default next is null
 */

var Node = function(el) {
    this.element = el;
    this.next = null;
};

var LList = function() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrev = findPrev;
};

var find = function(item) {
    // Start at the beginning of the node
    var current = this.head;

    // Assign the next node to the current node and examine whether it
    // equals the desired item. When it does, end the loop and return the
    // pointer
    while (current.element !== item) {
        current = current.next;
    }

    return current;
};

var insert = function(newEl, existingEl) {
    var current = this.find(existingEl); // current node
    var newNode = new Node(newEl);
    newNode.next = current.next;
    current.next = newNode;
};

var display = function() {
    var current = this.head;
    while (current.next) {
        if (current.next.element !== 'undefined') {
            print(current.next.element); // don't access the "head" node
            current = current.next; // loop to the next one
        }
    }
};

var findPrev = function(item) {
    var current = this.head;
    while (current.next.element !== item && current.next !== null) {
        current = current.next;
    }

    return current;
};

var remove = function(el) {
    var deleteThis = this.find(el);
    var prevNode = this.findPrev(el);

    prevNode.next = prevNode.next.next; // Then do our assignments
    deleteThis.next = null;
};