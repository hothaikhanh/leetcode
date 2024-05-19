var deleteDuplicates = function (head) {
    let currentNode = head;
    while (currentNode.next) {
        if (currentNode.next.val == currentNode.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};
