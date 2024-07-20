function restoreMatrix(row, col) {
    const m = row.length;
    const n = col.length;
    const A = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            A[i][j] = Math.min(row[i], col[j]);
            row[i] -= A[i][j];
            col[j] -= A[i][j];
        }
    }
    
    return A;
}

// Example usage:
const row = [3, 8];
const col = [4, 7];
const result = restoreMatrix(row, col);
console.log(result);
