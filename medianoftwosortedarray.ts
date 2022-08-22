/*
1) Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example1:
Input:nums1 = [1,3], nums2 = [2]
Output:2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example2:
Input:nums1 = [1,2], nums2 = [3,4]
Output:2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

const nums1 = [1,3]
const nums2 = [2]

const nums3 = [1,2]
const nums4 = [3,4]

const nums5 = [2,5,6,3]
const nums6 = [5,8,3,9,4]

const nums7 = [2, 4, 6, 8]
const nums8 = [10, 12, 14, 16]

function twoarraysmedian (x, y){
    let combined = x.concat(y);
    combined = combined.sort(function(a, b){return a-b});
    console.log("The array is: " +  combined)
    let clen = combined.length;
    let half = Math.floor(clen/2);

    if(clen%2 == 1){
        return combined[half];
    } else {
        return (combined[half] + combined[half-1])/2
    }
}

console.log(twoarraysmedian(nums1, nums2))
//The array is 1, 2, 3 and answer is 2
console.log(twoarraysmedian(nums3, nums4))
//The array is 1, 2, 3, 4 and answer is 2.5
console.log(twoarraysmedian(nums5, nums6))
//The array is 2, 3, 3, 4, 5, 5, 6, 8, 9 and answer is 5
console.log(twoarraysmedian(nums7, nums8))
//The array is: 2,4,6,8,10,12,14,16 and answer is 9