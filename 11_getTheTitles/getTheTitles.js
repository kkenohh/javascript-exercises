const getTheTitles = function(arr) {
    let array = [];
    arr.forEach(book => array.push(book.title));
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
