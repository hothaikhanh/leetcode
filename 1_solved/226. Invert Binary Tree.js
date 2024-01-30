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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) return root;

    let temp;
    if (root.right !== null) {
        temp = root.right;
        root.right = root.left;
        root.left = temp;
    } else if (root.right === null && root.left !== null) {
        temp = root.left;
        root.left = root.right;
        root.right = temp;
    }

    invertTree(root.right);
    invertTree(root.left);

    return root;
};
