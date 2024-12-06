var maxCount = function(banned, n, maxSum) {
    let bannedSet = new Set(banned);
    let total = 0, count = 0;
    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            total += i;
            if (total <= maxSum) count++;
            else break;
        }
    }
    return count;
};