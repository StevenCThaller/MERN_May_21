/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
        - start by partitioning the full array
            (use the previously built partition algo).
        - then partition the left side of the array
            (left of the returned partition idx) and the right side
            (right of the returned partition idx), recursively.
*/

function partition(nums = [], left = 0, right = nums.length - 1) {
    // were this a standalone function, this part would be much more necessary.
    // but we'll see in the quickSort function that this case is already covered.
    if(left === right){
        return left;
    }

    const pivotVal = nums[right];

    let newPIdx = left;

    for(let i = left; i < right; i++) {
        if(nums[i] <= pivotVal) {
            [nums[newPIdx], nums[i]] = [nums[i], nums[newPIdx]];
            newPIdx++;
        }
    }

    [nums[newPIdx], nums[right]] = [nums[right], nums[newPIdx]];
    return newPIdx;
}

function quickSort(nums = [], left = 0, right = nums.length-1){
    // Base case: Are our left and right indices valid
    // aka: is left actually to the left of right.
    // remember, a single element is always sorted
    if(left >= right) {
        return nums;
    }

    // partition this section of the array and return the pivot index
    const pivot = partition(nums, left, right);
    
    // now, call quickSort on the left side (from left to pivot - 1 since pivot is in the right place)
    quickSort(nums, left, pivot-1);
    // and call it on the right side (from pivot + 1 to right since pivot is in the right place)
    // and return it
    return quickSort(nums, pivot + 1, right);
}


console.log(quickSort([1,9,3,2,7,14,8]))