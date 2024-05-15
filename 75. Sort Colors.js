/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let red_count = 0;
    let white_count = 0;
    let blue_count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) red_count++;
        if (nums[i] == 1) white_count++;
        if (nums[i] == 2) blue_count++;
    }

    for (let i = 0; i < red_count; i++) {
        nums[i] = 0;
    }
    for (let i = red_count; i < red_count + white_count; i++) {
        nums[i] = 1;
    }
    for (let i = red_count + white_count; i < red_count + white_count + blue_count; i++) {
        nums[i] = 2;
    }

    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
