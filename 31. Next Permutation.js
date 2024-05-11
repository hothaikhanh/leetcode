/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let breakpoint = -1;
    let larger = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            breakpoint = i;
            break;
        }
    }

    if (breakpoint == -1) {
        console.log("no breakpoint found");
        nums.reverse();
    } else {
        console.log("found breakpoint: " + breakpoint);

        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] > nums[breakpoint]) {
                larger = i;
                break;
            }
        }
        console.log("found larger: " + larger);

        swapPlace(nums, breakpoint, larger);

        for (let i = 1; i < (nums.length - breakpoint) / 2; i++) {
            swapPlace(nums, breakpoint + i, nums.length - i);
        }
    }

    return nums;
};

function swapPlace(array, index1, index2) {
    let temp = array[index2];
    array[index2] = array[index1];
    array[index1] = temp;
}

console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));
