/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let areaSize = 0;
    for (let left = 0, right = height.length - 1; left < right; ) {
        let x = right - left;
        let y = height[left] < height[right] ? height[left] : height[right];
        areaSize = areaSize < x * y ? x * y : areaSize;
        height[left] < height[right] ? left++ : right--;
    }

    return areaSize;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
