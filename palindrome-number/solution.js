function isPalindrome(x) {
   // Convert number to a string to make it iterable
   xString = x.toString()

   // If the number is single digit, return true
   if(xString.lenght === 1) return true
   
   // Iterate through the string comparing each number to it's positional opposite
   // Return false if there is a non-matching set
   for(let i=0; i < xString.length / 2; i++) {
       if(xString[i] != xString[xString.length -1 -i]) return false
   }

   // Return true if the loop completes with no non-matching sets
   return true
}