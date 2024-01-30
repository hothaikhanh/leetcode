/**
 * @param {string} s
 * @return {number}
 */



var romanToInt = function (s) {
    var strArray = Array.from(s);
    var finalSum = 0;
    

    for (var curIndex = strArray.length - 1; curIndex >= 0;) {

        switch (strArray[curIndex]) {

            case "I":
                if (strArray[curIndex - 1] == "I" && strArray[curIndex - 2] == "I") {
                    finalSum += 3
                    curIndex -= 3
                    break;
                }

                else if (strArray[curIndex - 1] == "I" && strArray[curIndex - 2] != "I") {
                    finalSum += 2
                    curIndex -= 2
                    break;
                }

                else if (strArray[curIndex - 1] != "I" && strArray[curIndex - 2] != "I") {
                    finalSum += 1
                    curIndex -= 1
                    break;
                }


            case "V":
                if ((strArray[curIndex - 1] == "I")) {
                    finalSum += 4
                    curIndex -= 2
                    break;
                }

                else {
                    finalSum += 5
                    curIndex -= 1
                    break;
                }


            case "X":
                if ((strArray[curIndex - 1] == "I")) {
                    finalSum += 9
                    curIndex -= 2
                    break;
                }

                else {
                    finalSum += 10
                    curIndex -= 1
                    break;
                }


            case "L":
                if ((strArray[curIndex - 1] == "X")) { //XL
                    finalSum += 40
                    curIndex -= 2
                    break;
                }

                else {
                    finalSum += 50
                    curIndex -= 1
                    break;
                }

            case "C":
                if ((strArray[curIndex - 1] == "X")) { //XC
                    finalSum += 90
                    curIndex -= 2
                    break;
                }
                else {
                    finalSum += 100
                    curIndex -= 1
                    break;
                }


            case "D":
                if ((strArray[curIndex - 1] == "C")) { //CD
                    finalSum += 400
                    curIndex -= 2
                    break;
                }

                else {
                    finalSum += 500
                    curIndex -= 1
                    break;
                }

            case "M":
                if ((strArray[curIndex - 1] == "C")) { //CM
                    finalSum += 900
                    curIndex -= 2
                    break;
                }

                else {
                    finalSum += 1000
                    curIndex -= 1
                    break;
                }
        }
    }

    return finalSum
}





romanToInt("LXXXIII")