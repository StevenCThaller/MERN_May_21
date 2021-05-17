/* 
    Recreate Object.entries method

    Given an object, return an array of arrays of the object's key value pairs, where 
    each key value pair is a 2 item array

    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)

*/

// EXAMPLE:
const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };
const obj1 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13
});
const expected1 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13]
]

function entries(obj){
    const output = []; // obviously we need our output array to push things into

    for(const key in obj) { // loop through the keys in our object
        if(obj.hasOwnProperty(key)){ // now, .hasOwnProperty(key) will allow us to differentiate between whether the key is native to the object
            // WE defined, or if it was part of the prototype object.
            output.push([key, obj[key]]); // then take the array containing the key value pair and push it into our output
        } 
    }

    return output; // and voila, done!
}


/* 
    Given a table name string and an object whose key value pairs represent column names 
    and values for the columns, return a SQL insert statement string

    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it
    easy to add variables into a string or to add quotations without needing to escape them.

    Bonus: after solving it, write a 2nd solution focusing on functional programming using 
    built in methods
*/
// EXAMPLE
const table = "users";
const insertData = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected = "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

function insert(tableName, columnValuePairs) {
    // there are a TON of ways to do this one. you can go SUPER basic with
    // controlling each character, to using some more complex methods to kind of stitch
    // things together seamlessly.

    // This solution will all be built on string concatenation
    let query = `INSERT INTO ${tableName} (`; // so start with the first part of our string

    for(const column in columnValuePairs){ // loop through the keys in what was given to us
        if(query[query.length-1] !== '('){ // this is potentially dangerous: if the previous character in our query is an open parentheses, we're looking at the first column.
            query += ', '; // so, as long as we're not on the FIRST column, we'll add the trailing comma to separate our column names
        }

        query += column; // then add the column name to our query string
    }

    query += `) VALUES (`; // now, concatenate that middle portion

    
    for(const column of columnValuePairs){ // loop through the columns again
        if(query[query.length-1] !== '('){ // same logic. if the last character of the query string is an open parentheses, we're looking at the first column's value
            query += ', '; // so, as long as we're not looking at the first column, we want to add the comma before we add the new value
        }

        // now here we need to do some data checking. if the value is a string or datetime object, wrap it in quotes
        if(typeof columnVauePairs[column] === "string"){
            query += `'${columnVauePairs[column]}'`;
        } else{ // for the sake of this algo, we'll assume that otherwise, the value is a number or boolean.
            query += columnVauePairs[column];
        }

    }

    query += ');'; // then finally, concatenate the ending to the query

    return query; // and return it
}

function insertFunctional(tableName, columnValuePairs){
    const columns = Object.keys(columnValuePairs).join(", "); // splits the keys up into an array, then joins the elements in the array together as a string with ", " between them.
    const values = Object.values(columnValuePairs) // splits the keys up into an array
        .map( val => typeof val === "string" ? `'${val}'` : val) // and run map to replace that array with a modified version. if a value is a string, wrap it in quotes, otherwise don't.
        .join(', '); // finally, take the values of that array, and stitch them together as one big string, where each value is separated by ", "
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`; // finally, drop the relevant parts into their respective sections of the query string
}