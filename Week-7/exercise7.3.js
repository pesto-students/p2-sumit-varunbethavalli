function detectLoopInLinkedList(head){
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next;
        if(fast !== null){
            fast = fast.next;
        }
        if(fast === slow){
            fast = head;
            while(fast !== slow){
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
    }
    return null;
}