/* 
    Given in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?
*/
const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

function canStringBecomePalindrome(str) {
    // the secret here is recognizing that a string can become a palindrome in 2 cases:
        // 1. Even length string: every character appears an even number of times
        // 2. Odd length string: 1 character appears an odd number of times, while the rest appear an even number of times.
    // so, we should opt for a frequency table to keep track of how many times each character appears.
    // NOTE: It's physically impossible for an even length string to only have 1 character appear an odd number of times
    const freqTable = {};

    for(let i = 0; i < str.length; i++) {
        const character = str[i].toLowerCase(); // I'd consider different capitalizations as the same character, so let's sterilize
        if(!freqTable.hasOwnProperty(character)){ // if our frequency table doesn't have an entry for this character
            freqTable[character] = 1; // add one, and give it a value of 1
        } else {
            freqTable[character]++; // otherwise, increment the value already there
        }
    }

    // now, we need to see how many times an odd character appears:
    let oddCount = 0; // let's keep track of the number odd entries
    for(const key in freqTable){
        if(freqTable[key] % 2 !== 0) {// if this character appeared an odd number of times
            oddCount++; // increment our odd count
            if(oddCount > 1) { // if there are more than 1 characters that appear an odd number of times
                return false;
            }
        }
    }

    // if we've made it this far, than the string can be rearranged as a palindrome
    return true;
}