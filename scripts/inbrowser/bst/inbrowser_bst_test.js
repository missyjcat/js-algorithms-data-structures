var outputIn = document.getElementById('outputIn');
var outputPre = document.getElementById('outputPre');
var outputPost = document.getElementById('outputPost');
/**
 * Node stores data and also pointers to its left node and right node. It also
 * has a `show` method that displays the data.
 */
var Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
};

var show = function() {
    return this.data;
};

var left = function() {

}

/**
 * Inserting a new node in the BST follows these steps: 
 * 1)  determine if there is a root node or not. If not, this is a new BST and
 *     this will be its first Node.
 * 2)  if there is already a root node, need to determine where in the tree to
 *     place this new node.
 *     Algorithm: Set the root node as the current node. If data is less than
 *     current node, new CURRENT node is left child of current node. If new
 *     current node has a vlue of null, set this value to the new node and exit
 *     If not, repeat loop. 
 *     If data is greater than current node, set new CURRENT node to be the
 *     right child of the new current node. If this new current has a value of
 *     null, set to the value of the new node. If not, repeat the loop.
 */

var BST = function() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
};

var insert = function(data) {
    var newNode = new Node(data, null, null);
    if (!this.root) {
        this.root = newNode;
    } else {
        var parent = null;
        var curr = this.root;
        while(true) { // this is an infinite loop, depends on the below
                      // conditions to break out
            parent = curr;
            if (curr.data > data) {
                curr = curr.left;
                if (!curr) {
                    parent.left = newNode;
                    break;
                }
            } else if (curr.data < data) {
                curr = curr.right;
                if (!curr) {
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
};

/**
 * Three ways to traverse the BST: `inOrder`, `preOrder`, `postOrder`.
 * `inOrder` traverses the tree in ascending order of the node values.
 * `preOrder` traverses the tree from the root node, then the subtrees of the
 * left node of the root, then subtrees of the right node of the root.
 * `postOrder` traverses the tree from the child nodes of the left of the root
 * node on up, then the right.
 */

/**
 * InOrder recursive: Basically if the given node exists, 
 */

var inOrder = function(node, cachePrev, leftOrRight) {
    if (node) {
        outputIn.innerHTML += '<br> ' + ('testing: ' + node.show() + ' whose parent is: ' + (cachePrev ? cachePrev.show() : 'noParent') + ' and looking at the ' + leftOrRight);
        inOrder(node.left, node, 'left');
        outputIn.innerHTML += '<br> ' + (node.show() + ' ');
        inOrder(node.right, node, 'right');
    } else if (cachePrev) {
        outputIn.innerHTML += '<br> ' + ('no dice with the ' + leftOrRight + 'side, previous node was: ' + cachePrev.show());
    }
 };

var preOrder = function(node, cachePrev, leftOrRight) {
    if (node) {
        outputPre.innerHTML += '<br> ' + ('testing: ' + node.show() + ' whose parent is: ' + (cachePrev ? cachePrev.show() : 'noParent') + ' and looking at the ' + leftOrRight);
        outputPre.innerHTML += '<br> ' + (node.show() + ' ');
        preOrder(node.left, node, 'left');
        preOrder(node.right, node, 'right');
    } else if (cachePrev) {
        outputPre.innerHTML += '<br> ' + ('no dice with the ' + leftOrRight + 'side, previous node was: ' + cachePrev.show());
    }
 };

 var postOrder = function(node, cachePrev, leftOrRight) {
    if (node) {
        outputPost.innerHTML += '<br> ' + ('testing: ' + node.show() + ' whose parent is: ' + (cachePrev ? cachePrev.show() : 'noParent') + ' and looking at the ' + leftOrRight);
        postOrder(node.left, node, 'left');
        postOrder(node.right, node, 'right');
        outputPost.innerHTML += '<br> ' + (node.show() + ' ');
    } else if (cachePrev) {
        outputPost.innerHTML += '<br> ' + ('no dice with the ' + leftOrRight + 'side, previous node was: ' + cachePrev.show());
    }
 };


var nums = new BST();
nums.insert(23);
// outputIn.innerHTML += '<br> ' + (nums.root.data);
nums.insert(45);
// outputIn.innerHTML += '<br> ' + (nums.root.right.data);
nums.insert(16);
// outputIn.innerHTML += '<br> ' + (nums.root.left.data);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(1);
nums.insert(33);
nums.insert(8);
nums.insert(21);
// nums.insert(23);
outputIn.innerHTML += '<br> ' + ("<h1>Inorder traversal:</h1>");
nums.inOrder(nums.root);
outputPre.innerHTML += '<br> ' + ("<h1>Preorder traversal:</h1>");
nums.preOrder(nums.root);
outputPost.innerHTML += '<br> ' + ("<h1>Postorder traversal:</h1>");
nums.postOrder(nums.root);

