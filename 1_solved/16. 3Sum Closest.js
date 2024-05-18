var threeSumClosest = function (nums, target) {
    let closestSum;
    let minDiff = 10000;
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            let diff = Math.abs(target - sum);

            if (sum == target) {
                closestSum = sum;
                return closestSum;
            } else {
                if (diff < minDiff) {
                    closestSum = sum;
                    minDiff = diff;
                }
                sum < target ? l++ : r--;
            }
        }
    }
    return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
