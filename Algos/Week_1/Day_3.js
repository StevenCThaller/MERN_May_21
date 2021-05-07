/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function merge(left, right){
    const result = []; // where we will store our resulting array
    let iLeft = 0, iRight = 0; // index of the left array, index of the right array

    while(iLeft < left.length && iRight < right.length){ // while within the bounds of BOTH arrays
        if(left[iLeft] < right[iRight]){ // if the element in left is smaller
            // result.push(left[iLeft]);
            result[result.length] = left[iLeft]; // add it to the result
            iLeft++; // and increment iLeft
        } else if(left[iLeft] > right[iRight]){ // otherwise, if the element in right is smaller
            // result.push(right[iRight]);
            result[result.length] = left[iLeft]; // add it to the result
            iRight++; // and increment iRight
        } else {
            result.push(left[iLeft], right[iRight]); // if they're the same number, add both to the result
            iLeft++; // and increment both indexes
            iRight++;
        }
    }
    // now, we may still have elements left in one array. so these 2 while loops will just
    // push the rest of the contents into the result
    while(iLeft < left.length){
        result.push(left[iLeft]);
        iLeft++;
    }

    while(iRight < right.length){
        result.push(right[iRight]);
        iRight++;
    }
    return result; // and return the result array
}


function mergeSort(nums){
    // our base case is if the array is 1 element in length. if it is, it's already sorted, so return it
    if(nums.length == 1){
        return nums;
    }

    const mIdx = Math.floor(nums.length/2); // figure out where our middle is

    const left = nums.slice(0, mIdx); // left will be the array from index 0 to the middle
    const right = nums.slice(mIdx); // and right will be the array from middle to the end

    return merge(mergeSort(left), mergeSort(right)); // then, merge the results of mergesort called on the left and right arrays
}


// structure of a recursive function involves 2 main parts 
function factorial(num){
    // Part 1: Base case
    if(num == 1){
        // to break the recursive chain, we need to return something
        return 1;
    }

    // Part 2 (optional): Any additional logic needed

    // Part 3: Recursive call
    // let numMinus1Fac = factorial(num - 1);
    // return num * numMinus1Fac
    return num * factorial(num - 1);

}

const factorialArrow = num => num === 1 ? 1 : num * factorial(num-1);

console.log(factorialArrow(4));