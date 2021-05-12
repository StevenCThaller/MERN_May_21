/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
        - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg

    EXAMPLE:
    let nums1 = [4,1,2,3,4];
    let nums2 = [1,2,3,5,5,2];

    symmetricDifference(nums1, nums2) should return [4,5] because 4 is only in nums1, 5 is only in nums2, 
    and every other value can be found in the other array as well.
*/
function symmetricDifference(setA, setB){
    const diff = [];
    // my approach here is to use a dictionary to track which values are in each array
    const seen1 = {};
    const seen2 = {};

    for(let num of setA) { // loop through the elements in setA
        seen1[num] = num; // and add them to the seen1 dictionary
    }

    for(let num of setB) { // loop through the elements in setB
        seen2[num] = num; // and add them to the seen2 dictionary
    }
    
    for(let key in seen1){ // check all the key value pairs in the first dictionary
        if(seen2[key] === undefined){ // and if the second dictionary doesn't have that entry
            diff.push(seen1[key]); // add the value to the output array
        }
    }

    for(let key in seen2) { // check all the key value pairs in the second dictionary
        if(seen1[key] === undefined){ // and if the first dictionary doesn't have that entry
            diff.push(seen2[key]); // add the value to the output array
        }
    }

    return diff; // and return the diff array
}

let nums1 = [4,1,2,3,4];
let nums2 = [1,2,3,5,5,2];

console.log(symmetricDifference(nums1, nums2))