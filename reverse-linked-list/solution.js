// Reverse list by shifting nodes from initial list and unshifting to a reversed list
function reverseList(head) {
   // Handle edge cases
   if(head == null || head.next == null) return head

   // Start a reverse list
   let reverseHead = null, temp

   // loop through the initial list, removing the first element and placing it at the beginning of the reverse list
   while(head != null) {
      temp = {...head}
      temp.next = reverseHead
      reverseHead = temp
      head = head.next
   }
   
   return reverseHead
}

// Reverse list by moving pointers in place
function reverseList(head) {
   if(head == null || head.next == null) return head

   let front = head, middle = head.next, temp
   front.next = null

   while(middle) {
      middle.next === undefined ? temp = null : (temp = middle.next)
      middle.next = front
      front = middle
      middle = temp
   }

   return front
}

let list = { val: 5, next: {val: 4, next: {val: 3, next: {val: 2, next: {val: 1, next: null}}}}}

console.log(reverseList(list))