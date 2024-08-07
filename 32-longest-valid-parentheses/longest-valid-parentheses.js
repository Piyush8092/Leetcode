function longestValidParentheses(s) {
    if (s === null) return -1;
    if (s.length === 0) return 0;

    const str = s.split('');
    let sum = 0, res = 0, len = 0;
    const n = s.length;

    // Scan the string from left to right, plus 1 for '(' and minus 1 for ')'.
    for (let i = 0; i < n; i++) {
        if (str[i] === '(') sum++;
        else sum--;
        if (sum < 0) {
            sum = 0;
            len = 0;
        } else {
            len++;
            if (sum === 0) res = Math.max(res, len);
        }
    }

    // Scan again from right to left, plus 1 for ')' and minus 1 for '('.
    sum = 0;
    len = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (str[i] === ')') sum++;
        else sum--;
        if (sum < 0) {
            sum = 0;
            len = 0;
        } else {
            len++;
            if (sum === 0) res = Math.max(res, len);
        }
    }

    return res;
}
