/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.

    EXAMPLE:
    let nums = [1,2,3,4,6,7,8,10];

    allNonConsecutive(nums) should return:
    [
        { i: 4, n: 6},
        { i: 7, n: 10 }
    ]

    because at index 4, the value is 6, which is not the previous value plus 1 (4 + 1 = 5, not 6),
    and at index 7, the value is 10, which is not the previous value plus 1 (8 + 1 = 9, not 10)
*/
function allNonConsecutive(sortedNums){
    const nonConsec = []; // output array

    for(var i = 1; i < sortedNums.length; i++) { // since the value at index 0 is ignored, we'll start at index 1
        if(sortedNums[i] !== sortedNums[i-1] + 1) { // at each index, check to see if the value is not the previous value + 1
            nonConsec.push({ i: i, n: sortedNums[i] }); // if it's not, push the object with the index and number into the output array
        }
    }

    return nonConsec; // and finally, after checking each value, return the nonConsec array
}

/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let nums = [2, 5, 3, 6, 7, 23, 12] 
    let sum = 16

    findConsqSums(nums, sum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ]

    because 2 + 5 + 3 + 6 = 16, and those numbers are all consecutive, and
    3 + 6 + 7 = 16, and those numbers are also all consecutive
*/
function findConsqSums(nums, targetSum){
    const conSum = [];

    // there's no easy way about this. we need to check consecutive sums for each and every value
    for(var i = 0; i < nums.length; i++){
        let cSum = nums[i]; // to avoid continously looping through an array and calculating a sum, we'll store a sum. we'll start our sum as the current value
        let cNums = [nums[i]]; // since we want an array with the numbers that add up to the sum, we'll make an array, and store the current value
        let cI = i+1; // we need another index for the consecutive set of numbers

        while(cSum < sum && cI < nums.length){ // we want to keep checking next numbers until either our cSum isn't less than the target sum anymore, and while cI is still within the array
            cSum += nums[cI]; // add the value to our sum
            cNums.push(nums[cI]); // and add it to our array
            cI++; // and increment cI
        }

        if(cSum === sum) { // now that we're out of the while loop, let's check if it broke because the cSum is GREATER than our target, or cI just went outside the bounds of the array
            conSum.push(cNums); // if it's because cSum IS the target sum, add it the list of consecutive sum sets
        }
    }

    return conSum; // and return the set of consecutive numbers
}