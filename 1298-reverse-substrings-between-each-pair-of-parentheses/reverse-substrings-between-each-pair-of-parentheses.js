/**
 * @param {string} s
 * @return {string}
 */
function reverseParentheses(s) {
    let res = [''];
    for (let c of s) {
        if (c === '(') {
            res.push('');
        } else if (c === ')') {
            let reversed = res.pop().split('').reverse().join('');
            res[res.length - 1] += reversed;
        } else {
            res[res.length - 1] += c;
        }
    }
    return res.join('');
}
