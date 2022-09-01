const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (typeof num == 'string') num = parseInt(num);
    let sum = 1;
    let prev = 0;
    let temp;
    for (let i = 2; i <= num; i++) {
        temp = sum;
        sum += prev;
        prev = temp;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
