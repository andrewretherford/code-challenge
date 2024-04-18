function findSqrRt(N){
   if(x === 0) return 0;
   let rightOffset = Math.log2(N) / 2;
   let initialGuess = 1 << rightOffset;
   let sqrt = 0;

   while(initialGuess != 0) {
      if((sqrt + initialGuess) * (sqrt + initialGuess) <= N) sqrt += initialGuess;

      initialGuess >>= 1;
   }

   return sqrt;
}

findSqrRt(49)