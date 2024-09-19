var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let isOdd = false;
    let combined = [];
    while(i < nums1.length && j < nums2.length) {
            if(nums1[i] < nums2[j]){
                combined.push(nums1[i]);
                current = nums1[i];
                i++
            } else {
                combined.push(nums2[j]);
                current = nums2[j];
                j++
            }
            
    }
    while(i < nums1.length) {
        combined.push(nums1[i]);
        i++
    }
    while(j < nums2.length) {
        combined.push(nums2[j]);
        j++
    }
    if(combined.length % 2 === 0){
        return combined[combined.length / 2 - 1] + ((combined[combined.length / 2] - combined[combined.length / 2 - 1]) / 2);
    } else {
        return combined[Math.floor(combined.length / 2)];
    }
  }