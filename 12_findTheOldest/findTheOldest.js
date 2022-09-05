const findTheage = function(arr) {
    function helper(person) {
        if (!person.hasOwnProperty('yearOfDeath')) {
            let death = new Date().getFullYear();
        } else {
            death = person.yearOfDeath;
        }
        
        return death - person.yearOfBirth;
    }
    let age = 0;
    let oldest;
    arr.forEach(person => {
        if (helper(person) > age) {
            age = helper(person);
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheage;
