/** Circular Linked List implementation **/

/**
 * Circular linked list have nodes that only point to next, but the last node
 * always points to the head, so you can iterate through the list. When a new
 * linked list is created, the head's `next` property points to itself. This
 * means that each newly inserted node will assign its `next` property pointing
 * back to the head, making the previous node point to the newly created node.
 */

var Node = function(el) {
    this.element = el;
    this.next = null;
};

var LList = function() {
    this.head = new Node('head');
    this.head.next = this.head; // This ensures the `this.head` reference gets
                                // passed to every new node
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

    // Loop through making sure the next is not null and also that when we
    // reach the very last element, we stop. (meaning when we reach the
    // penultimate element, that is our last print of the next, or last, el)
    while (current.next !== null & current.next.element !== 'head') {
        print(current.next.element); // don't access the "head" node
        current = current.next; // loop to the next one
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