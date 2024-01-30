/**
 * @param {string} s
 * @return {number}
 */



var romanToInt = function (s) {
    var finalSum = 0;
    var romanNums = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }


    for (let i = 0, sLength = s.length; i < sLength; i++) {
        // console.log(`- current iteration is: ${i}`)
        // console.log(`- current char: posn = ${(i + 1)} and character = ${s[i]}`)

        if (romanNums[s[i]] < romanNums[s[i + 1]]) {
            finalSum -= (romanNums[s[i]])
        }
        else {
            finalSum += (romanNums[s[i]])
        }
    }
    return finalSum
}












console.log(romanToInt("IX"))