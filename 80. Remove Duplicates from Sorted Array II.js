/**
 * @param {number[]} nums
 * @return {number}
 */

//SOLUTION 1: SLOW
var removeDuplicates = function (nums) {
    let k = nums.length;

    for (current = nums.length - 1; current >= 0; current--) {
        console.log(`checkng: ${nums[current]}`);
        if (nums[current] == nums[current - 2]) {
            nums.push(nums.splice(current, 1)[0]);
            k--;
        }
    }

    return k;
};

//SOLUTION 2: FAST
var removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(`checkng index ${i} while k is ${k}, current number is ${nums[i]}`);

        if (k == 0 || k == 1 || nums[k - 2] != nums[i]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
