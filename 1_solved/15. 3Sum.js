/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let target = 0;
    if (nums.length < 3) return [];
    nums = nums.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (nums[i] == nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        let sum = nums[i] + nums[l] + nums[r];
        while (l < r) {
            if (sum == target) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (nums[l] == nums[l - 1]) l++;
                while (nums[r] == nums[r + 1]) r--;
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
};

console.log(threeSum([0, 0, 0, 0]));
