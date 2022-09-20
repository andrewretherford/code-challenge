function twoSum(nums, target) {
   // Use an object to track index position of values in nums array
   const matchObj = {}

   // Iterate through nums array checking to see if the target value minus the current element is a number that exists in the match object.  If it exists, return the index of the current element and the matched element.
   for(let i=0; i < nums.length; i++) {
      if(target-nums[i] in matchObj) return [matchObj[target-nums[i]], i]
      matchObj[nums[i]] = i
   }

   return []
}