function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
function createList(values) {
    let head = new ListNode(0);
    for (let i = 0, prev, current; i < values.length; i++) {
        if (i == 0) {
            head.val = values[0];
            prev = head;
        } else if (i < values.length - 1) {
            current = new ListNode(0);
            prev.next = current;
            current.val = values[i];
            prev = current;
        } else if ((i = values.length - 1)) {
            current = new ListNode(0);
            prev.next = current;
            current.val = values[i];
            current.next = null;
        }
    }
    return head;
}
function printList(list) {
    let current = list;
    let string = "";
    while (current) {
        string += `${current.val} ----> `;
        current = current.next;
    }

    console.log(`[ ${string}null]`);
}

var swapNodes = function (head, k) {
    if (!head.next) return head;

    let pointer = new ListNode(null, head);
    let current = head;

    let left = null,
        right = null;
    let n = 1;
    while (current) {
        console.log(n);
        if (n == k) {
            left = current;
            right = head;
        }
        if (!current.next) {
            console.log(left.val, right.val);
            let tmp = left.val;
            left.val = right.val;
            right.val = tmp;
            return pointer.next;
        }
        if (right) right = right.next;
        prev = current;
        current = current.next;
        n++;
    }
};

let list = createList([7, 9, 3, 4]);
printList(swapNodes(list, 3));
// printList(swapNodes(list, 1));
// printList(swapNodes(list, 3));
// printList(swapNodes(list, 4));
// printList(swapNodes(list, 5));
// printList(swapNodes(list, 6));
