// Given an array of integers and a value
// Remove all elements from the array that match the value
// Remaining elements must be placed in the beginning of the existing array without creating a new array
// Return the number of remaining elements

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