var strStr = function (haystack, needle) {
	for (let k = 0; k < haystack.length; k++) {
		if (haystack[k] == needle[0]) {
         let match = false;
			for(let i = 0; i < needle.length; i++) {
            if(haystack[k + i] != needle[i]) break;
            if(i == needle.length -1) match = true;
         }
         if(match) return k;
	   }
   }

	return -1;
};
