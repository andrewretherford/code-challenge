/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val){
   // Create a tracker to mark the end of the filtered array
   let currentIndex = 0

   // Loop through the array and remove any values that match val
   for(let i=0; i < nums.length; i++) {
      if(nums[i] !== val) {
         nums[currentIndex] = nums[i]
         currentIndex++
      }
   }

   return currentIndex
}