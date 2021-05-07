/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partitionMid(nums = [], left = 0, right = nums.length-1) {
    const midIdx = Math.floor((left + right) / 2);
    const pivotVal = nums[midIdx];
    
    let iLeft = left, iRight = right;

    while(iLeft <= iRight){
        while(nums[iLeft] < pivotVal){
            iLeft++;
        }

        while(nums[iRight] >= pivotVal){
            iRight--;
        }
        if(iLeft <= iRight){
            [nums[iLeft], nums[iRight]] = [nums[iRight], nums[iLeft]];
            iLeft++;
            iRight--;
        }
    }
    [nums[midIdx], nums[iLeft]] = [nums[iLeft], nums[midIdx]];

    return iLeft;
}

function partitionRight(nums = [], left = 0, right = nums.length - 1) {
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


function partitionLeft(nums = [], left = 0, right = nums.length - 1) {
    const pivotVal = nums[left];

    let newPIdx = right;

    for(let i = left + 1; i < right; i++) {
        if(nums[i] >= pivotVal) {
            [nums[newPIdx], nums[i]] = [nums[i], nums[newPIdx]];
            newPIdx--;
        }
    }

    [nums[newPIdx], nums[left]] = [nums[left], nums[newPIdx]];
    return newPIdx;
}

const nums = [11, 8, 14, 3, 3, 3, 6, 2, 7];
console.log(partitionLeft(nums));
console.log(nums);