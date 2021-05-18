/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
    // Bonus 2: write this as an array prototype method
    Array.prototype.methodName = function(someparameter){

    }
*/
// EXAMPLE:
const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

function findObjects(criteria, collection){
    const results = []; // to store our matches
    for(const item of collection){ // iterate through the items in the collection
        let match = true; // we'll assume it's gonna be a match, and we'll flip this if it's not
        for(const key in criteria){ // loop through the keys in the criteria
            // we want to break out if either the item doesn't even have one of the criteria keys, or if the values don't match
            if((criteria.hasOwnProperty(key) && !item.hasOwnProperty(key)) || (item.hasOwnProperty(key) && criteria[key] !== item[key])){
                // flipping this to false is what allows us to know it wasn't a match. 
                match = false;
                // the break is to just save us some time and calculations
                break;
            }
        }
        // if we get out of that for loop and match is still true, it gets added to the results
        if(match) {
            results.push(item);
        }
    }
    return results;
}

const findObjectsFunctional = (criteria, collection) => collection.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]))


// BONUS 2:
Array.prototype.find = function(criteria){
    return this.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]));
} 

/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
    
    BONUS: accept a 4th parameter that is a function to be run on the update
*/
const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];
const searchId = 3;
const updateData = { redBeltStatus: true, isLateToday: true };
const expected2 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

function findByIdAndUpdate(id, updatedVals, collection) {
    for(const item of collection) {
        if(!item.hasOwnProperty("id")){
            break;
        }
        if(item.id === id) {
            for(const key in updatedVals){
                item[key] = updatedVals[key];
            }
            return item;
        }
    }
    return null;
}
function findByIdAndUpdateBonus(id, updatedVals, collection, callback = null) {
    for(const item of collection) {
        if(item.id === id) {
            for(const key in updatedVals){
                item[key] = updatedVals[key];
            }
            if(callback) {
                callback(item);
            }
            return item;
        }
    }
    return null;
}

// console.log(findByIdAndUpdate(searchId, updateData, students));

function addLate(item){
    item.lateCount++;
}

console.log(findByIdAndUpdateBonus(searchId, updateData, students, addLate))