// Given a sorted array of distinct integers and a target value
// Return the target value, or the index it would have appeared at if it were present

// Constraints
/* ------------------------------------------------------
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
------------------------------------------------------ */

function searchInsert(nums, target) {
   // Use a binary search to find the target index
   
   // Find the initial midpoint
   let start = 0, end = nums.length - 1, midpoint = Math.floor((start + end) / 2)

   while(true) {
      // Check to see if the midpoint is greater than, less than, or equal to the target value and either calculate a new midpoint, or return the index
      console.log('start', start)
      console.log('midpoint', midpoint)
      console.log('end', end)
      console.log('nums[midpoint]', nums[midpoint])
      switch(true) {
         case start === end && target !== nums[midpoint]:
            target > nums[midpoint] && midpoint++
            return midpoint < 0 ? 0 : midpoint

         case target < nums[midpoint]:
            if(midpoint === 0) return 0
            end = midpoint - 1
            if(end < start) end = start
            break

         case target > nums[midpoint]:
            start = midpoint + 1
            if(start > end) start = end
            break

         case target === nums[midpoint]:
            return midpoint
      }  
      midpoint = Math.floor((start + end) / 2)
   }
}

const arr = [3, 5, 7, 9, 10]

console.log(searchInsert(arr, 8))