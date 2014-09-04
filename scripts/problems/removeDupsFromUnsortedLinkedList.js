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
     while (current !== null) {
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
 *
 * I think both solutions are O(n) time complexity
 */

/**
 * Iterate through the list, and with each iteration, use another iteration to
 * compare the values up until the current iteration's position. Remove a value
 * if it is found to be a duplicate of the current.
 */

var removeDupsWithoutBuffer = function(linkedList) {
    var i = 0,
        j = 0,
        current = linkedList.head.next,
        runner = null,
        compareEl;

    while (current !== null) {

        /**
         * Each time this loop repeats, start the runner again at the head
         */
        runner = linkedList.head;
        compareEl = current.element;

        /**
         * While the runner is not equal to the current pointer, run a loop to
         * compare the runner's current element with the current's element.
         * If it's a match, remove that from the list and break out of the loop
         */
        // print(runner.element);
        while (runner !== current) {
            if (runner.element === compareEl) {
                // print('runner is removing ' + compareEl);
                linkedList.remove(compareEl);
                break;
            }
            // print('runner is running: ' + runner.element);
            runner = runner.next;
        }

        /**
         * Move current to the next
         */
        // print('current was: ' + current.element);
        current = current.next;
    }
    
    return linkedList;
};

print('Printing original list... ');
var list2 = new LList();
list2.insert('jess', 'head');
list2.insert('kris', 'jess');
list2.insert('liz', 'kris');
list2.insert('mom', 'liz');
list2.insert('dad', 'mom');
list2.insert('bud', 'dad');
list2.insert('bud', 'bud');
list2.insert('bud', 'bud');
list2.insert('bud', 'bud');
list2.insert('mom', 'bud');
list2.display();
print();

print('Printing deduped list without using a buffer... ');
var deDupedList = removeDupsWithoutBuffer(list2);
deDupedList.display();
print();