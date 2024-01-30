/**
 * @param {string} s
 * @return {number}
 */



var romanToInt = function (s) {
    var strArray = Array.from(s);
    var intArray = []
    var romanNums = [
        {
            key: "I",
            value: 1
        },
        {
            key: "V",
            value: 5
        },
        {
            key: "X",
            value: 10
        },
        {
            key: "L",
            value: 50
        },
        {
            key: "C",
            value: 100
        },
        {
            key: "D",
            value: 500
        },
        {
            key: "M",
            value: 1000
        }
    ]

    function parseChar(c, index, array) {
        var rvIndex = array.length - 1 - index

        // console.log("index is: " + index +
        //     " current intArray is: " + intArray +
        //     " current reversed index is :" + rvIndex)

        switch (array[rvIndex]) {

            case romanNums[0].key: //I

                if (intArray[index - 1] == 5 || intArray[index - 1] == 10) {
                    intArray.push(romanNums[0].value * -1)
                    break;
                }

                intArray.push(romanNums[0].value)
                break;


            case romanNums[1].key: //V
                intArray.push(romanNums[1].value)
                break;


            case romanNums[2].key: //X

                if (intArray[index - 1] == 50 || intArray[index - 1] == 100) {
                    intArray.push(romanNums[2].value * -1)
                    break;
                }

                intArray.push(romanNums[2].value)
                break;

            case romanNums[3].key: //L
                intArray.push(romanNums[3].value)
                break;
            


            case romanNums[4].key: //C

                if (intArray[index - 1] == 500 || intArray[index - 1] == 1000){
                    intArray.push(romanNums[4].value * -1)
                    break;
                }

                intArray.push(romanNums[4].value)
                break;

            case romanNums[5].key: //D
                intArray.push(romanNums[5].value)
                break;

            case romanNums[6].key: //M
                intArray.push(romanNums[6].value)
                break;
        }

    }

    strArray.map(parseChar)
    return intArray.reduce((a, b) => a + b, 0)



}





console.log( romanToInt("LVIII"))