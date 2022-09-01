const palindromes = function (str) {
    str = str.toLowerCase().split(' ').join('');
    str = str.split('').filter(c => c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123).join('');
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
