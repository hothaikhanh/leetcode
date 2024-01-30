/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 */


var addTwoNumbers = function (l1, l2) {
    var l1Int = parseInt(arrayToString(l1))
    var l2Int = parseInt(arrayToString(l2))
    var sum = l1Int + l2Int

    function arrayToString(numArr) {
        let result = ""
        numArr.forEach((value, index, array) => {
            let _value = array[array.length - 1 - index]
            result += _value.toString()
        })
        return result;
    }


    function numToArray(int) {
        int = int.toString()
        let arr = []
        for (let i = int.length - 1; i >= 0; i--) {
            arr.push(int[i])
        }
        return arr
    }

    return numToArray(sum)


};

addTwoNumbers([2, 4, 3], [5, 6, 4])