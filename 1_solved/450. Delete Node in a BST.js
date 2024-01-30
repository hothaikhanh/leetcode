/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root,value, parentNode = root) {
    if (root == null) return root;
    if (value === root.val) {
            if (root.left !== null && root.right !== null) {
                let [successor, successorParent] = getSuccessor(root.right, root);
                
                //let the successor inherit the left child
                successor.left = root.left;
                //if the successor is not the direct child of the deleting node
                if (root.right !== successor) {
                    //if the successor has children, make the successor parrent inhert them
                    successorParent.left = successor.right !== null ? successor.right : null;
                    //when the successor is NOT the direct child, let the successor inherit the right child
                    successor.right = root.right;
                }
                if (parentNode == root) {
                    root = successor;
                    return root;
                }
                parentNode.left == root ? (parentNode.left = successor) : (parentNode.right = successor);
            } else if ((root.left == null && root.right !== null) || (root.left !== null && root.right == null)) {
                childNode = root.left !== null ? root.left : root.right;
                if (parentNode == root) {
                    root = childNode;
                    return root;
                }
                parentNode.left == root ? (parentNode.left = childNode) : (parentNode.right = childNode);
            } else if (root.left == null && root.right == null) {
                if (parentNode == root) {
                    root = null;
                    return root;
                }
                parentNode.left == root ? (parentNode.left = null) : (parentNode.right = null);
            }
        }

        if (value < root.val) {
            deleteNode( root.left,value, root);
        } else if (value > root.val) {
            deleteNode( root.right,value, root);
        }

        return root;
};

const getSuccessor = (rootRight, rootParent) => {
    return rootRight.left == null ? [rootRight, rootParent] : getSuccessor(rootRight.left, rootRight);
};

