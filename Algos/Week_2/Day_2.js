/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal

    EXAMPLE:
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]

    diagonalDifference(matrix) should return 2, because (1 + 5 + 9) - (3 + 5 + 9) has an absolute value of 2
*/
function diagonalDifference(sqrMatrix) {
    let d1 = 0; // we need to store the sum of diagonal 1's values
    let d2 = 0; // and the sum of diagonal 2's values
    for(let i = 0; i < matrix.length; i++){ // because this is a square, we can use regular ole math to calculate the positions, so only 1 for loop
        d1 += matrix[i][i]; // as i increments, matrix[i][i] will be the position of each element in the diagonal going from top left to bottom right
        d2 += matrix[i][matrix.length-1-i]; // and this will be the position of each element in the diagonal going from top right to bottom left
    }
    return Math.abs(d1 - d2); // then, calculate the absolute difference, which is just the absolute value of d1 - d2 (or vice versa)
}

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    const nums1 = [1, 2, 2, 2, 7];
    const nums2 = [2, 2, 6, 6, 7];

    orderedMultiSetUnion(nums1, nums2) should return [1,2,2,2,6,6,7]
*/
function orderedMultiSetUnion(sortedA, sortedB){
 const union = []; // we need somewhere to put all of our values

    // we'll just start by looping as long as our 2 index variables are less than their respective array lengths
    for(var iA = 0, iB = 0; iA < sortedA.length && iB < sortedB.length;) { // getting fancy with the loop again!
        if (sortedA[iA] === sortedB[iB]) { // if the value at iA in sortedA is the same as the value at iB in sortedB
            union.push(sortedA[iA]); // add it to the union and incremenet both indexes
            iA++;
            iB++;
        } else if (sortedA[iA] < sortedB[iB]) { // if the value at iA in sortedA is less than the value at iB in sortedB
            union.push(sortedA[iA]); // add it to the union, and only increment iA
            iA++;
        } else { // otherwise, the value at iB in sortedB must be less than the value at iA in sortedA
            union.push(sortedB[iB]); // so add the value at iB in sortedB to the union and only increment iB
            iB++;
        }

        // in this loop, by adding a value and only incrementing the respective index, it allows for us to
        // include the higher frequency of duplicates, while the other index "waits"
    }
    
    // now, it's possible that one of several things happened:
    // 1. Both arrays are the same length and finished at the same time
    // 2. One array is longer than the other and has not finished iterating through
    // 3. We got through all values in 1 array but didn't finish iterating through the other

    // so, we run 2 while loops. if iA is already finished going through sortedA, this while loop
    // won't run, and if iB is already finished going through sortedB, the second while loop won't run.
    while(iA < sortedA.length){
        union.push(sortedA[iA]); // but, if it does enter one of the loops, it'll go through and add the 
        iA++; // remaining values
    }

    while(iB < sortedB.length){
        union.push(sortedB[iB]);
        iB++;
    }

    return union; // by now, union will contain everything we need!
}