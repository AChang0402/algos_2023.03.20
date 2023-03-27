/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 0, 2];
const expected3 = 2;


function balanceIndex(arr){
    var split = 1
    for (split; split<arr.length-1; split++){
        var leftSum = 0
        var rightSum = 0
        for (var i=0;i<split;i++){
            leftSum+=arr[i]
        }
        for (var j=split+1; j<arr.length;j++){
            rightSum+=arr[j]
        }
        if (leftSum===rightSum){
            return split
        }
    }
    return -1;
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))

// create the function and decide what params it needs and what it will return