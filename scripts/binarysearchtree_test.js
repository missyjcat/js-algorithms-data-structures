load('scripts/binarysearchtree_ADT.js');

var nums = new BST();
nums.insert(23);
print(nums.root.data);
nums.insert(45);
print(nums.root.right.data);
nums.insert(16);
print(nums.root.left.data);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(1);
nums.insert(33);
nums.insert(8);
nums.insert(21);
// nums.insert(23);
print("Inorder traversal: ");
nums.inOrder(nums.root);

