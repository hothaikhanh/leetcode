/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    console.log(strs);
    let res = [];
    while (strs.length > 0) {
        let newGroup = [strs.pop()];
        let tmp = [];
        while (strs.length > 0) {
            if (checkAnagram(newGroup[newGroup.length - 1], strs[strs.length - 1])) {
                newGroup.unshift(strs.pop());
            } else {
                tmp.unshift(strs.pop());
            }
        }
        strs = tmp;
        res.push(newGroup);
    }

    function checkAnagram(first = "", second = "") {
        let x = Array(26).fill(0);
        let y = Array(26).fill(0);

        for (const char of first) {
            x[char.charCodeAt(0) - 97] += 1;
        }
        for (const char of second) {
            y[char.charCodeAt(0) - 97] += 1;
        }

        return x.join(",") == y.join(",");
    }

    return res;
};

console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
