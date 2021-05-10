/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    let nums1 = [0, 1, 2, 2, 2, 7];
    let nums2 = [2, 2, 6, 6, 7];

    orderedIntersection(nums1, nums2) should return [2, 7]
*/
function orderedIntersection(sortedA, sortedB){
    let iA = 0, iB = 0; // we'll want to keep track of where we're at in each set

    const intersection = []; // and this is where we'll store our results

    while(iA < sortedA.length && iB < sortedB.length){ 
        if(sortedA[iA] === sortedB[iB]) { // if we found a value in BOTH sets, we need to check something else first
            // our intersection array should NOT contain any duplicates. so, if we've already added the value to our array
            // (and since it's sorted, it'll just be the last added value), we dont' want to add it again.
            if(intersection[intersection.length-1] !== sortedA[iA]) { // so if the value we've found to be in both is not already in our intersection
                intersection.push(sortedA[iA]); // then add it to the intersection
            }

            // whether it had already been added, or if we just added it, we still want to increment both indexes
            iA++;
            iB++;
        } else if (sortedA[iA] < sortedB[iB]) { // if it's not a value in both, we need to find which one was smaller.
            // the reason for this is if, for example, the value we're looking at in sortedA is 4, and the value
            // we're looking at in sortedB is 6, we can safely assume that 4 is not in sortedB, since we're already
            // past where it would be.
            iA++; // so we'll increment iA
        } else { // otherwise, sortedB[iB] would be smaller
            iB++; // so increment iB for the same reason
        }
    }
    // now, after breaking out of the while loop, we don't need to worry about checking any remaining values,
    // because we're only concerned with the values in BOTH sets, and we've already checked all the values from
    // one of the sets, meaning there can't possibly be any values in the other that would have been in the first.
    return intersection; // so return our intersection set
}

let nums1 = [0, 1, 2, 2, 2, 7];
let nums2 = [2, 2, 6, 6, 7];

console.log(orderedIntersection(nums1, nums2));