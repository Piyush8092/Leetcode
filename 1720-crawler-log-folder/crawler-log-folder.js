/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function minOperations(logs) {
  let step = 0;
  for (const log of logs) {
    if (log === '../') {
      if (step > 0) {
        step--;
      }
    } else if (log !== './') {
      step++;
    }
  }
  return step;
}
