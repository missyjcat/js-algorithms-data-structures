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
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
};

var insert = function(data) {
    var newNode = new Node(data, null, null);
    if (this.root === null) {
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

var inOrder = function(node) {
    if (node) {
        inOrder(node.left);
        print(node.show() + ' ');
        inOrder(node.right);
    }
};

var preOrder = function(node) {
    if (node) {
        print(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
};

var postOrder = function(node) {
    if (node) {
        preOrder(node.left);
        preOrder(node.right);
        print(node.show() + ' ');
    }
};

var getMin = function(node) {
    var curr = node;
    while (curr.left !== null) {
        curr = curr.left;
    }

    return curr.data;
};

var getMax = function(node) {
    var curr = node;
    while (curr.right !== null) {
        curr = curr.right;
    }

    return curr.data;
};

var find = function(data) {

    /**
     * Start at the root
     */
    var curr = this.root;

    /**
     * While the current node's data doesn't match the data
     */
    while (curr.data !== data) {

        /**
         * If the current node is null, then we haven't found what we're
         * looking for
         */
        if (curr === null) {
            return null;
        }

        /**
         * If the data to find is less than the current, go left
         */
        if (curr.data > data) {
            curr = curr.left;
        
        } else {

        /**
         * Otherwise, go right
         */
            curr = curr.right;
        }
    }
    /**
     * return the node
     */
    return curr;
};

var remove = function(data) {

    root = removeNode(this.root, data);

};

var removeNode = function(node, data) {
    if (node === null) {
        return null;
    }

    if (data === node.data) {
        
        /**
         * Test to see if this node is a leaf
         */
        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        var tmp = getMin(node.right);
        node.data = tmp.data;
        node.right = removeNode(node.right, tmp.data);
        return node;

    } else if (data < node.data) {

        node.left = removeNode(node.left, data);
        return node;

    } else {

        node.right = removeNode(node.right, data);
        return node;

    }

};