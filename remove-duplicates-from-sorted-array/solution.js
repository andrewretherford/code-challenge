function removeDuplicates(nums) {
   // If array length is 1, return 1
   if(nums.length == 1) return 1
   // Create an index to track the end of the filtered array
   let currentIndex = 1
   // Loop through the array beginning at index 1, and compare each index to its predecessor
   for(let i=1; i < nums.length; i++) {
      // If the current and previous numbers don't match, move the current number to the end of the filtered array
      nums[i] != nums[i-1] && (
         nums[currentIndex] = nums[i],
         currentIndex++
      )
   }

   return currentIndex
}
