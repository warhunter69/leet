/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    return  recusion(null,head);
};

let recusion = function(prev,curr){
    //recursion
    if(curr){
        let next = curr.next
        curr.next = prev
        return recusion(curr,next)
    }
    else{
        return prev;
    }
}
var reverseList = function(head) {
    let prev = null;
    let next = null;
    let curr = head;
    while(curr){
        next = curr.next;
        curr.next = prev
        prev = curr
        curr = next;
       

    }
    return prev;
};
