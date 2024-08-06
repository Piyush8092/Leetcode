function minimumPushes(word) {
    let freq = new Array(26).fill(0);
    for (let c of word) {
        freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    freq.sort((a, b) => b - a);
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        ans += freq[i] * (Math.floor(i / 8) + 1);
    }
    return ans;
}
