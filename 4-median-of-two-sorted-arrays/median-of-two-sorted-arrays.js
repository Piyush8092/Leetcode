var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    // Ensure that nums1 is the smaller array to minimize the binary search space
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    // Initialize the binary search bounds
    let l = 0;
    let r = n1;

    while (l <= r) {
        // Calculate the partition positions for nums1 and nums2
        let mid1 = Math.floor((l + r) / 2);
        let mid2 = Math.floor((n1 + n2 + 1) / 2 - mid1);

        // Compute the boundary values for the partitions
        let maxLeft1 = (mid1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
        let minRight1 = (mid1 === n1) ? Number.MAX_SAFE_INTEGER : nums1[mid1];

        let maxLeft2 = (mid2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];
        let minRight2 = (mid2 === n2) ? Number.MAX_SAFE_INTEGER : nums2[mid2];

        // Check if we have found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // If the total length is even
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                // If the total length is odd
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // Adjust the binary search bounds if partition is too far right
            r = mid1 - 1;
        } else {
            // Adjust the binary search bounds if partition is too far left
            l = mid1 + 1;
        }
    }

    // If the input arrays are not sorted, return an error code
    return -1;
};

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);  // Output: 2.0
