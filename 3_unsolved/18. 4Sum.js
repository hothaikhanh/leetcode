/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > 1 && nums[j] == nums[j - 1]) continue;

            let sum1 = nums[i] + nums[j];
            let temp = createNewArray(nums, i, j);
            let l = 0;
            let r = temp.length - 1;
            while (l < r) {
                let sum2 = temp[l] + temp[r];
                if (sum2 + sum1 == target) {
                    res.push([nums[i], nums[j], temp[l], temp[r]]);
                    l++;
                    r--;
                    while (nums[l] == nums[l - 1]) l++;
                    while (nums[r] == nums[r + 1]) r--;
                } else if (sum2 + sum1 < target) {
                    l++;
                } else if (sum2 + sum1 > target) {
                    r--;
                }
            }
        }
    }
    return res;

    function createNewArray(array, delete1, delete2) {
        let temp = Array.from(array);
        return temp.slice(delete2 + 1, temp.length);
    }
};

console.log(fourSum((nums = [-2, -1, -1, 1, 1, 2, 2]), (target = 0)));
