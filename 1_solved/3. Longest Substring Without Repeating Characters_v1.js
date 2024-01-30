/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var strs = s.split("");
    var chainCount = 0
    var tmpSet = new Set();

    strs.forEach((currentChar) => {
        if (tmpSet.has(currentChar)) {
            if (tmpSet.size > chainCount) { chainCount = tmpSet.size }
            let foundDup = false;
            tmpSet.forEach((setItem, setItemIndex) => {
                if (setItem != currentChar && !foundDup) {
                    tmpSet.delete(setItemIndex)
                }
                else if (setItem == currentChar) {
                    tmpSet.delete(setItemIndex)
                    foundDup = true
                }
            })
            tmpSet.add(currentChar)

        }
        else {
            tmpSet.add(currentChar)
            if (tmpSet.size > chainCount) { chainCount = tmpSet.size }
        }
    })
    return chainCount;
}

lengthOfLongestSubstring("abcabcabc")