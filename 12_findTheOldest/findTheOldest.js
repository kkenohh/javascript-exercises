const findTheage = function(arr) {
    function helper(person) {
        if (!person.hasOwn('yearOfDeath')) {
            let death = Date.getFullYear();
        } else {
            death = person.yearOfDeath;
        }
        
        return death - person.yearOfBirth;
    }
    let age = 0;
    let oldest;
    return arr.reduce(person => helper(person) > age);
};

// Do not edit below this line
module.exports = findTheage;
