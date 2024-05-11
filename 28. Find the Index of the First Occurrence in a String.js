/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1;
    for (let i = 0, l = needle.length - 1; i < haystack.length; i++, l++) {
        //go through every letter in haystack
        console.log(`checking: ${haystack[i]}->${haystack[l]} == ${needle}`);
        if (haystack[i] == needle[0] && haystack[l] == needle[needle.length - 1]) {
            let subStr = haystack.substring(i, i + needle.length);
            console.log("found a match, checking " + subStr);
            if (subStr == needle) return i;
        }
    }
    return -1;
};

console.log(strStr("lioioeet", "ee"));
