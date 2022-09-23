// Given a string of words and spaces
// Return length of the last word in the string

// Constraints
/* --------------------------------------------
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
-------------------------------------------- */

function lengthOfLastWord(s) {
   // Create a word variable to track the most recent word and a space variable to track when spaces are encountered
   let word = '', foundWord = false

   // Loop backwards through the string from the end
   for(let i=s.length - 1; i >= 0; i--) {
      switch(s[i]) {
         // If the current element is a space, and foundWord is true, return the length of word
         case ' ':
            if(foundWord) {
               return word.length
            }
            break
            
         // If the current element is not a space, set foundWord to true if it is not already true, then add the current element to word
         default:
            !foundWord && (foundWord = true)
            word += s[i]
      }
   }

   return word.length
}

const string = "   fly me   to   the moon  "
console.log(string.length)
console.log(lengthOfLastWord(string))