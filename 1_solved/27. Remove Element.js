var removeElement = function (nums, val) {
    if (nums.length == 0) return 0;
    let k = nums.length;
    let i = 0;
    while (i < k) {
        if (nums[i] === val) {
            nums.push(nums.splice(i, 1)[0]);
            k--;
        } else {
            i++;
        }
    }
    return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
