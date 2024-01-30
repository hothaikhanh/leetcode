/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let arr = [],
        result = [];
    k = parseInt(k);

    for (let index = 1; index <= n; index++) {
        arr.push(index);
    }
    console.log(arr);

    for (let baseStart = 0; arr.length >= k; ) {
        console.log(`\nWhen there are ${arr.length} elements left, which are ${arr}`);
        result.push(arr.slice(0, k));
        for (let baseEnd = 1; baseEnd < k && arr.length >= k; baseEnd++) {
            let baseArr = arr.slice(baseStart, baseEnd);

            console.log(`-->base array with the limit of ${baseEnd} is ${baseArr}`);

            for (let flexStart = baseEnd + 1; flexStart + k - 1 <= arr.length; ++flexStart) {
                let flexEnd = flexStart + k - baseEnd;
                let flexArr = arr.slice(flexStart, flexEnd);
                console.log(`   ---->flex array with the the limit of ${flexStart} and ${flexEnd} is ${flexArr}`);

                result.push(baseArr.concat(flexArr));
            }
        }
        arr.shift();
        console.log(`\n---------->result update:---------`);
        console.log(result);
        console.log(`\n`);
    }

    return result;
};

console.log(combine(10, 5));
