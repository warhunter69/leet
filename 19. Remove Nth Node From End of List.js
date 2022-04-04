/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size = 0;
    let node = head;
    while(node){
        node = node.next;
        size++;
    }
    if(size <= 1){
        head = null;
        return head;
    }
    let i = 0;

    let prev = null;
    node = head;
    let index = size - n;
    if(index === 0){
        prev = node;
        node = node.next
        prev.next = null;
        return node;
    }
    while(i < index && node){
        prev = node;
        node = node.next;
        
      i++  
    }
    prev.next = node.next;
    node = null
    return head;
};
