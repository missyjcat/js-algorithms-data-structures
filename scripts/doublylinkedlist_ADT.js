/** Doubly Linked List implementation **/

/**
 * Doubly linked list have nodes that point to a next and a previous node
 */

var Node = function(el) {
    this.element = el;
    this.next = null;
    this.previous = null;
};

var LList = function() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    // this.findPrev = findPrev;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
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

var findLast = function() {
    var current = this.head;
    while (current.next !== null) {
        current = current.next;
    }

    return current;
};

var dispReverse = function() {
    var current = this.findLast();
    while (current.previous !== null) {
        print(current.element); // Print the current so not to access the head
        current = current.previous;
    }
};

var insert = function(newEl, existingEl) {
    var current = this.find(existingEl); // current node
    var newNode = new Node(newEl);
    newNode.next = current.next;
    current.next = newNode;
    newNode.previous = current;
};

var display = function() {
    var current = this.head;
    while (current.next) {
        print(current.next.element); // don't access the "head" node
        current = current.next; // loop to the next one
    }
};

// var findPrev = function(item) {
//     var current = this.head;
//     while (current.next.element !== item && current.next !== null) {
//         current = current.next;
//     }

//     return current;
// };

var remove = function(el) {
    var deleteThis = this.find(el);

    deleteThis.previous.next = deleteThis.next; // Point the next of the node
                                                // before this to the one after
                                                // this
    deleteThis.next.previous = deleteThis.previous; // Point the previous of
                                                    // the node after this to
                                                    // the node before this
    deleteThis.previous = null;
    deleteThis.next = null;
};