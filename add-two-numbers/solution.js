
//   Definition for singly-linked list.
  class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0, carry = 0
    let pointer = new ListNode()
    let sumList = pointer

    while(l1 || l2 || carry) {
        sum = carry

        if(l1) {
            sum += l1.val
            l1 = l1.next
        }
        if(l2) {
            sum += l2.val
            l2 = l2.next
        }

        if(sum >= 10) {
            sum -= 10
            carry = 1
        } else {
            carry = 0
        }

        pointer.next = new ListNode(sum)
        pointer = pointer.next
    }

    return sumList.next
};
