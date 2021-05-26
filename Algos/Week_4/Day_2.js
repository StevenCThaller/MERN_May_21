/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
const nums1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const nums2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const nums3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];


function dropIt(arr, callback){
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i])){
            for(let j = 0; j < arr.length-1; j++) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            arr.pop();
        } else {
            return arr;
        }
    }
    return [];
}
console.log(dropIt(nums2, callback2));