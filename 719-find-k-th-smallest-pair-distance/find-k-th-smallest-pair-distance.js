var getPairs = function(t, nums) {
    let cnt = 0, l = 0;
    for (let r = 1; r < nums.length; r++) {
        while (l < r && t < nums[r] - nums[l]) l++;
        cnt += r - l;
    }
    return cnt;
};

var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let l = 0, r = nums[nums.length - 1];
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (getPairs(mid, nums) < k) l = mid + 1;
        else r = mid;
    }
    return l;
};