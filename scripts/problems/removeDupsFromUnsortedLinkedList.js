load('scripts/linkedlist_ADT.js');

/**
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 *
 * Assuming it's a singly linked list.
 */

/**
 * Here's the implementation with a buffer allowed
 */

var removeDupsWithBuffer = function(linkedList) {
    var i = 0,
        j = 0,
        buffer = [],
        current = null;

    /**
     * Iterate through the list and store values in a buffer if it is not
     * already there, and if it is, remove it from the linked list.
     */
    
     current = linkedList.head;
     while (current) {
        if (buffer.indexOf(current.element) === -1) {
            buffer.push(current.element);
        } else {
            linkedList.remove(current.element);
        }
        current = current.next;
     }

     return linkedList;
};

print('Printing original list... ');
var list = new LList();
list.insert('jess', 'head');
list.insert('kris', 'jess');
list.insert('liz', 'kris');
list.insert('mom', 'liz');
list.insert('dad', 'mom');
list.insert('bud', 'dad');
list.insert('bud', 'bud');
list.insert('bud', 'bud');
list.insert('bud', 'bud');
list.insert('mom', 'bud');
list.display();
print();

print('Printing deduped list using a buffer... ');
var deDupedList = removeDupsWithBuffer(list);
deDupedList.display();
print();

/**
 * Here's an implementation without a buffer allowed, using the "runner"
 * technique.
 */

/**
 * Iterate through the list, and with each iteration, use another iteration to
 * compare the values up until the current iteration's position. Remove a value
 * if it is found to be a duplicate of the current.
 */

var removeDupsWithoutBuffer = function(linkedList) {
    var i = 0,
        j = 0;

    
};