/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/
function insertionSort(nums){
    for(let i = 1; i < nums.length; i++) {
        const toInsert = nums[i]; // save the value we wish to insert into the sorted portion of the array
        let sortedIdx = i-1; // and initialize a variable for the index within the sorted portion of array that we'll be checking,
        // starting at the rightmost element 

        while(sortedIdx >= 0 && toInsert < nums[sortedIdx]){ // we're going to want to shift an element to the right as long as 
            // its within the bounds of the left side of our array, and our value to insert is less than any given element.
            nums[sortedIdx+1] = nums[sortedIdx];
            sortedIdx--; // then decrement our sortedIdx
        }
        nums[sortedIdx + 1] = toInsert; // breaking out of the while loop means we've found where our element must be inserted.
        // in this case, it's sortedIdx + 1 because we decremented sortedIdx, so it will be sitting to the left of the index
        // in which we want to insert our value.
    }

    return nums; // now, return the array!
}

console.log(insertionSort([8,2,10,15,7,3,-10]));