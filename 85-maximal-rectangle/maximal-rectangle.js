// Function to compute the largest rectangle area in a histogram
const largestRectangleArea = (heights) => {
    const stack = [];
    let maxArea = 0;
    const n = heights.length;

    // Loop through each bar in the histogram
    for (let i = 0; i <= n; i++) {
        const currentHeight = i === n ? 0 : heights[i];

        // Calculate area with the height of the bar at the top of the stack
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= currentHeight) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, width * height);
        }

        // Push the current index to the stack
        stack.push(i);
    }

    return maxArea;
};

// Function to compute the maximal rectangle area of all '1's in a binary matrix
const maximalAreaOfSubMatrixOfAll1 = (matrix) => {
    if (matrix.length === 0) return 0;

    const n = matrix.length; // Number of rows
    const m = matrix[0].length; // Number of columns
    const height = new Array(m).fill(0);
    let maxArea = 0;

    // Process each row of the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Update height based on the current row's values
            height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
        }

        // Compute the maximum area of the rectangle in the histogram defined by heights
        maxArea = Math.max(maxArea, largestRectangleArea(height));
    }

    return maxArea;
};

// Main function to compute the maximal rectangle area in the binary matrix
const maximalRectangle = (matrix) => {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    return maximalAreaOfSubMatrixOfAll1(matrix);
};

// Example usage:
const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];
console.log(maximalRectangle(matrix)); // Output: 6
