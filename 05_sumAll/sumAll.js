const sumAll = function(a, b) {
    if (typeof a != 'number' ||
        typeof b != 'number' ||
        a < 0 ||
        b < 0) return 'ERROR';
    let arr = [a, b].sort((a, b) => a - b);
    for (let i = arr[0] + 1; i <= arr[1]; i++) arr[0]+=i;
    return arr[0];
};

// Do not edit below this line
module.exports = sumAll;
