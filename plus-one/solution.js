// Given a large integer as an array of digits
// Each element in the array is the nth digit of the integer
// Digits are arranged from left to right from most significant to least significant
// Increment the large integer by one and return the resulting array

// Constraints
/* ----------------------------------
1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
---------------------------------- */

function plusOne(digits) {
   // Loop backwards through the array from the last element 

   // On each pass, if the current element is less than 9, add 1 and return the array. If it is 9, set it to 0.
   // If the loop arrives at index 0 and the element is 9, un-shift 1 into the array and return.

   for(let i = digits.length-1; i>=0; i--) {
      if(digits[i] < 9) {
         digits[i]++
         return digits
      } else digits[i] = 0
   }

   digits.unshift(1)
   return digits
}