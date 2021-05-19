/* 
    Given an array of objects, a searchFor string, and searchBy key that exists in the object
    return a new array of only those objects whose value for the given key starts with the given search string
    You can assume the key will exist on the object and the value of that key will be a string
    Bonus: make the search case insensitive
    Bonus: re-write it with functional programming in mind, using built in methods
    Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
        - you can assume the searchMethod will be valid
*/
// EXAMPLE:
const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
];
    
const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];
function filterByKey(items, searchFor, searchBy){
    const matches = []; // a place to put our lovely matches

    for(const item of collection){ // loop through the items in the collection
        let isMatch = true; // we'll be optimistic and assume everything will be a match

        for(let i = 0; i < searchFor.length; i++) { // we'll loop through the characters in our searchFor string
            if(item[searchBy][i] !== searchFor[i]){ // and if the character in the search string doesn't match that same character in the item's value's string
                isMatch = false; // it's not a match
                break; // and break out of this inner for loop to save us some time
            }
        }

        if(isMatch){ // if we finished that process and this item is still a match,
            matches.push(item); // add it to our output
        }
    }

    return matches; // and return 'em!
}

const searchForBonus = "e";
const searchByBonus = "firstName";
const searchMethodBonus = "endsWith";
const expectedBonus = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
]
function filterByKeyBonus3(items, searchFor, searchBy, searchMethod){
    return items.filter(item => String(item[searchBy]).toLowerCase()[searchMethod](searchFor.toLowerCase()));
    // .filter() -- filter through the collection and return the array of objects that the callback resolves true for
    // .toLowerCase() -- make the search case insensitive
    // [searchMethod]() -- this syntax means run the method with this name

    // BASICALLY
    // check each item in the collection. if the item's searchBy key's value set to lowercase passes the method
    // when searching for the searchFor string set to lowercase, it will add it to our returned array.
    // the searchMethod will likely be one of the following:
    // includes -- if the string is a substring ANYWHERE in the string we're searching through, it'll be true
    // startsWith -- if the string STARTS with our substring, it'll be true
    // endsWith -- if the string ENDS with our substring, it'll be true
}

// filterByKeyBonus3(people, searchBy1, searchFor1, "functionThatDoesNotExist")

let someObject = {
    firstName: "Cody",
    lastName: "Thaller",
    printName: () => {
        console.log("My name is Cody");
    }
}

let someKey = "printName";

console.log(someObject[someKey]());