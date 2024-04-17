
var lengthOfLongestSubstring = function(s) {
   if(s.length === 0) return 0
   if(s.length === 1) return 1
   
   let longest=0, subString=''

   for(let k=0; k < s.length; k++) {
      if(subString.includes(s[k])) {
         longest = Math.max(longest, subString.length)
         subString = subString.slice(subString.indexOf(s[k]) + 1, s.length)
      }
      subString += s[k]
   }

   longest = Math.max(longest, subString.length)

   return longest
}

function cheatSort(arr) {
   const counter = arr.reduce((cnt, ele) => (cnt[ele] = (cnt[ele] || 0) + 1, cnt), {});
   // (☆)
   let sorted = new Set(arr.reduce((arr, ele) => (arr[ele] = ele, arr), []));
   sorted.delete(undefined);
   sorted = [...sorted];
   // The lines above alone are enough if the elements are unique
   for (let i = 0, p = 0; i < sorted.length; i++) {
     const ele = sorted[i];
     let rep = counter[ele];
     do {} while (arr[p++] = ele, --rep !== 0);
   }
 }

 let arr = [5,9,1,4,2]

arr = arr.reduce((arr, ele) => (arr[ele] = ele, arr), [])

 console.log(arr[6])