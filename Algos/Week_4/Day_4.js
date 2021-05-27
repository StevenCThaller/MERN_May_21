/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
*/
const S1 = "ab#cdy##lp";
// a -> ab -> a -> ac
const T1 = "ad#clp";
// a -> ab -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
// a -> ab -> a -> 
const T2 = "c#d#";
// c ->  -> d -> 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a ->  ->  -> c
const T3 = "#a#c";
//  -> a ->  -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a ->  -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    let finalS = "";
    let finalT = "";
    
    for(let i = S.length - 1; i >=0; i--) {
        if(S[i] !== "#"){
            finalS += S[i];
        } else {
            let skipCount = 0;
            while(S[i] === "#"){
                skipCount++;
                i--;
            }
            i-= skipCount-1;
        }
    }

    for(let i = T.length - 1; i >= 0; i--) {
        if(T[i] !== "#"){
            finalT += T[i];
        } else {
            let skipCount = 0;
            while(T[i] === "#"){
                skipCount++;
                i--;
            }
            i-= skipCount-1;
        }
    }

    return finalS === finalT;
}

console.log(backspaceStringCompare(S4, T4));



