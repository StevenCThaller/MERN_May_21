/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort

    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
function bubbleSort(nums){
    let isSorted = false; // here's our flag to check if things are sorted or not.

    while(isSorted === false){ // we want to run the bubble process as long as our flag says the array is not yet sorted
        isSorted = true; // we'll flip our flag to true, because we're optimists!
        // really, we're changing it to true, because it's easier to say "well, we had to make a swap so it's not sorted"
        // than it is to say "well, we didn't change anything, so it is sorted, so let's flip it now."

        for(let i = 0; i < nums.length - 1; i++) { // loop through the array. notice i < nums.length - 1. you'll see why on the next line
            const j = i + 1; // we want to check the value at the current index with the value at the next index.
            // that's why we did i < nums.length - 1 in the for loop. If we were at the last index and checked the next index, we're in
            // big doo doo, because there is no next index.

            if(nums[i] > nums[j]){ // if the current index's value is greater than the next value
                isSorted = false; // flip our flag to false
                const temp = nums[i]; // and swap
                nums[i] = nums[j]; // those
                nums[j] = temp; // elements
            }
        }
    }

    return nums; // by the time we get here, it's sorted!
}

/* 
    https://visualgo.net/en/sorting

    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.

    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
function selectionSort(nums){
    for(let i = 0; i < nums.length; i++) { // we need to loop through the array
        let minIdx = i; // we want to find the smallest element, but we're more concerned with its 
        // INDEX than its value. So we'll keep tack of a minIdx, and set it to i at the beginning
        // of each iteration

        for(let j = i+1;  j < nums.length; j++) { // we'll loop through the remaining values
            if(nums[j] < nums[minIdx]){ // if we find a number that's less than our current minimum
                minIdx = j; // set that number's index as minIdx
            }
        }

        if(nums[minIdx] !== nums[i]){ // if, after checking everything, we found a new minimum
            const temp = nums[i]; // swap the new minimum
            nums[i] = nums[minIdx]; // with the value at i
            nums[minIdx] = temp; 
        }
        // and then bring it back to the top and run it again!
    }

    return nums; // by now, everything is sorted!
}
