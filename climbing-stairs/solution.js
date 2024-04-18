var climbStairs = function(n) {
   let numTwos = n >> 1;
   let permutations = 1;

   function factorial(num) {
       if(num ===0 || num === 1) return 1;
   
       return num * factorial(num - 1);
   }
   
   for(let k = 1; k <= numTwos; k++) {
      let places = n - k;
      permutations += factorial(places)/(factorial(places - k)*factorial(k));
   }
   
   return permutations;
};