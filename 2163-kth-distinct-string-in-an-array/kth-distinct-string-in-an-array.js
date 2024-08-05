function kthDistinct(arr, k) {
    // Filter the array to keep only the distinct elements
    arr = arr.filter((item, index, self) => self.indexOf(item) === self.lastIndexOf(item));
    
    // Return the k-th distinct element if it exists, otherwise return an empty string
    return k > arr.length ? "" : arr[k - 1];
}

// Example usage
const arr = ["a", "b", "a", "c", "b", "d"];
const k = 2;
console.log(kthDistinct(arr, k));  // Output: "c"
