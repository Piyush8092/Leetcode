/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let n5 = 0, n10 = 0;
    for(let i of bills) {
        if(i == 5) n5 ++;
        else if(i == 10) n5 --, n10 ++;
        else if(n10 > 0) n5 --, n10 --;
        else n5 -= 3;
        if(n5 < 0) return false;
    }
    return true;
};