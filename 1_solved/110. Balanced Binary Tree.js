var isBalanced = function (root) {
    const check = (root) => {
        if (root == null) return [true, 0];

        let leftHeight = check(root.left);
        let rightHeight = check(root.right);

        return [
            leftHeight[0] && rightHeight[0] && Math.abs(leftHeight[1] - rightHeight[1]) <= 1,
            Math.max(leftHeight[1], rightHeight[1]) + 1,
        ];
    };
    return check(root)[0];
};
