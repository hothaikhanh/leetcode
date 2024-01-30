var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log("checking " + nums[i], nums);
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i], nums[j]);
            if (nums[i] + nums[j] == target) return [i, j];
        }
    }
};

console.log(twoSum([3, 0, 0], 0));
