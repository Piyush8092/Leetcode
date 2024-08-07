const isMatch = (string, pattern) => {
  let s = 0, p = 0; // Pointers for string and pattern
  let starIdx = -1, matchIdx = 0; // Track last '*' and matching positions

  while (s < string.length) {
    if (p < pattern.length && (string[s] === pattern[p] || pattern[p] === "?")) {
      // Characters match or pattern has '?', move both pointers
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === "*") {
      // Pattern has '*', remember its position
      starIdx = p;
      matchIdx = s;
      p++;
    } else if (starIdx === -1) {
      // Mismatch without a preceding '*'
      return false;
    } else {
      // Mismatch after a '*', backtrack
      p = starIdx + 1;
      s = ++matchIdx;
    }
  }

  // Check for remaining '*' in the pattern
  while (p < pattern.length && pattern[p] === "*") {
    p++;
  }

  return p === pattern.length; // Ensure all pattern characters are matched
};

// Example usage:
console.log(isMatch("aa", "a*"));   // true
console.log(isMatch("aa", "a"));    // false
console.log(isMatch("cb", "?a"));   // false
console.log(isMatch("adceb", "*a*b")); // true
console.log(isMatch("acdcb", "a*c?b")); // false
