function isValid(s) {
   // if s length is 1 then string is invalid
   if(s.length === 1) return false

   // use an array as a stack to track open parentheses in order
   const parenArr = []
   let matchObj = {
      ')': '(',
      ']': '[',
      '}': '{'
   }

   // iterate through the string
   for(let i=0; i < s.length; i++){
      // if the current element is an opening parentheses, add it to the stack
      if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
         parenArr.push(s[i])
      } else if(parenArr.length === 0) {
         // if parenArr length is 0 and the current element is not an opening parentheses, return false
         return false
      } else {
         // If parenArr length is greater than 0, pop the last element of parenArr and compare it to the current element.  If not a match, return false.
         if(parenArr.length > 0 && matchObj[s[i]] !== parenArr.pop()) return false
      }
   }

   // once loop is complete, if parenArr length is 0 return true, otherwise return false
   return parenArr.length === 0 ? true : false
}

const str = '([{[]}{}])'

console.log("- isValid(str)", isValid(str))
