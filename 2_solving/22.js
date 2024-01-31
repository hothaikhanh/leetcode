/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (!n) return [""];

    function getNewCombination(current, size, output) {
        if (size == 1) {
            output.add(current);
            return;
        } else {
            for (let i = 0; i < current.length; i++) {
                getNewCombination(current.slice(0, i) + "()" + current.slice(i, current.length), size - 1, output);
            }
        }
    }

    let output = new Set();
    getNewCombination("()", n, output);
    return Array.from(output);
};

console.log(generateParenthesis(3));
