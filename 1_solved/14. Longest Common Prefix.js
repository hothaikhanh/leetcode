/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var prefix = "";
    var minLength = Math.min.apply(Math, strs.map(function (str) { return str.length; }));
    
    for (let i = 0; i < minLength; i++) {
            if (strs.every((value,index,array) => { return value[i] == array[0][i] })) {
                prefix += strs[0][i]
                // console.log(`current prefix is ${prefix} and current char is ${strs[0][i]}`)
            }
            else {
                break;
            }
    }

    return prefix;
};

console.log(longestCommonPrefix(["cir","car"]))
