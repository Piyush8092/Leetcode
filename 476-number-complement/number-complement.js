var findComplement = function(num) {
    if (num === 0) return 1;

    const bitLength = num.toString(2).length;
    
    const mask = (1 << bitLength) - 1;
    
    return num ^ mask;
};