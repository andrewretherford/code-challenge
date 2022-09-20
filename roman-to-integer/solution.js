function romanToInt(s) {
   // Create a library of roman numerals and their integer values
   const romanNums = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000,
       'total': 0
   }
   
   // Iterate through the string to calculate the value using the library
   for(let i=0; i < s.length; i++) {
      // If the next element is greater than the current element, subtract the current element's value from the next element's value and add to the total, then iterate i in order to skip the next element on the following loop cycle. This is possible because the constraints specify that the roman numberal will always be valid.
      if(romanNums[s[i+1]] > romanNums[s[i]]) {
         romanNums.total += romanNums[s[i+1]] - romanNums[s[i]]
         i++
      } else {
      // If the next element is not greater than the current element, simply add its value to the total
      romanNums.total += romanNums[s[i]]
      }
   }
   
   return romanNums.total    
}