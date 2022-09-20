function longestCommonPrefix(strs) {
   // If array length is 1, return the first element
   if(strs.length === 1) return strs[0]

   // Create a an object to track the current lcp against a potential new lcp built against the next element
   let lcp = strs[0]

   // Iterate through the array and compare letters to find the lcp
   for(let i=1; i < strs.length; i++) {
      // For each element, check the current lcp against the corresponding prefix of the element and add matches to the new lcp
      if(strs[i].indexOf(lcp) !== 0) {
         for(let k=0; k < lcp.length; k++) {
            if(lcp[k] !== strs[i][k]) {
               lcp = lcp.slice(0, k)
               break
            }
         }
      }
   }
   return lcp
}

const strs = ['sand', 'antelope', 'cantelope']
console.log("- longestCommonPrefix(strs)", longestCommonPrefix(strs))