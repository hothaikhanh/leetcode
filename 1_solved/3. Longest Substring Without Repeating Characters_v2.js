/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = 0;

    let ans = 0;

    let x = new Set();

    while (i < s.length && j < s.length) {
        while (x.has(s[j])) {
            x.delete(s[i]);
            i++;
        }
        x.add(s[j]);
        j++;
        ans = Math.max(ans, j - i);
    }
    console.log(ans)
    return ans;
}

lengthOfLongestSubstring("pweww")