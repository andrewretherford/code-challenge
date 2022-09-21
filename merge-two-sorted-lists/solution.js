/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoLists(list1, list2) {
   // Recursive function to sort and merge two lists

   // Base cases
   if(list1 == null) return list2
   if(list2 == null) return list1l1

   // Create a new head and sort by value
   let mergedList
   if(list1.val <= list2.val) {
      mergedList = list1
      mergedList.next = mergeTwoLists(list1.next, list2)
   } else {
      mergedList = list2
      mergedList.next = mergeTwoLists(list1, list2.next)
   }

   return mergedList
}

// Created non-recursive version for very large lists to avoid potential stack overflow
function mergeTwoLists(l1, l2) {
   // Include constraints for edge cases
   if(l1 == null) return l2
   if(l2 == null) return l1

   // Create new list for the resulting merge and a node tracker
   let combinedList, currentNode

   if(l1.val <= l2.val) {
      combinedList = l1
      currentNode = l1
      if(l1.next) l1 = l1.next
      else {
         currentNode.next = l2
         return combinedList
      }
   } else {
      combinedList = l2
      currentNode = l2
      if(l2.next) l2 = l2.next
      else {
         currentNode.next = l1
         return combinedList
      }
   }

   while(l1 || l2) {
      if(l1.val <= l2.val) {
         currentNode.next = l1
         currentNode = currentNode.next
         if(l1.next) l1 = l1.next
         else {
            currentNode.next = l2
            return combinedList
         }
      } else {
         currentNode.next = l2
         currentNode = currentNode.next
         if(l2.next) l2 = l2.next
         else {
            currentNode.next = l1
            return combinedList
         }
      }
   }
}