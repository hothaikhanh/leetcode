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

var reverseBetween = function (head, left, right) {
    if (!head.next || left == right) return head;
    let pointer = new ListNode(null, head);
    let reverseList = new ListNode(null);
    let current = head;
    let prev = pointer;
    let a, b, c, d;
    let counter = 0;

    while (current) {
        counter++;
        if (counter == left) {
            a = prev;
            b = current;
        }
        if (counter == right) {
            c = current;
            d = current.next;
        }
        //advance to the next node
        prev = current;
        current = current.next;
        //add the prev node to the reverse list if it's in range
        if (left <= counter && counter <= right) {
            prev.next = reverseList;
            reverseList = prev;
        }
    }

    a.next = reverseList;
    b.next = d;
    return pointer.next;
};

let list = createList([3, 5]);
printList(reverseBetween(list, 1, 1));
