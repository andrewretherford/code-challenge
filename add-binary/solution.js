// Given two binary strings a and b, return their sum as a binary string
// ---------------------------- Constraints ----------------------------
// 1 <- a.length, b.length <= 10^4
// a and b consist only of 0 or 1 characters
// Each string does not contain leading zeros except for the zero itself

function addBinary(a, b) {
   // find the longer of the two strings
   const longArr = a.length > b.length ? [...a] : [...b]
   const shortArr = a.length > b.length ? [...b] : [...a]
   const longIndex = longArr.length - 1
   const shortIndex = shortArr.length - 1
   let carryover = 0

   // add binary values together by comparing indexes starting from the last index
   for(let i=0; i < longArr.length; i++) {
      // if short array index isn't below 0
      if(shortIndex - i >= 0) {
         switch(true) {
            // if current index of both arrays is 0
            case longArr[longIndex - i] === '0' && shortArr[shortIndex - i] === '0':
               // if carryover is 0 then output is 0, otherwise output is 1 and carryover is 0
               if(carryover === 1){
                  longArr[longIndex - i] = '1'
                  carryover = 0
               }
               break
         
            // if current index of both arrays is 1
            case longArr[longIndex - i] === '1' && shortArr[shortIndex - i] === '1':
               // if carryover is 0 then output is 0 and carryover is 1, otherwise output is 1 and carryover is 1
               if(carryover === 0) {
                  longArr[longIndex - i] = '0'
                  carryover = 1
               }
               break

            // if the current index of one array holds 0 and the other holds 1
            default:
               // if carryover is 0 then output is 1, otherwise output is 0 and carryover is 1
               longArr[longIndex - i] = carryover === 0 ? '1' : '0'
         }
      } else {
      // if short array index is below 0
         // if carryover is 1
         if(carryover === 1) {
            switch(longArr[longIndex - i]) {
               // if current index of long array is 0 then output is 1 and carryover is 0
               case '0':
                  longArr[longIndex - i] = '1'
                  carryover = 0
                  return longArr.join('')

               // if current index of long array is 1 then output is 0 and carryover is 1
               default:
                  longArr[longIndex - i] = '0'
                  break
            }
         }
      }
   }

   // if carryover is 1, unshift 1 onto the array
   if(carryover === 1) {
      longArr.unshift('1')
   }

   // return the result
   return longArr.join('')
}