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

var deleteDuplicates = function (head) {
    if (!head) return null;
    if (!head.next) return head;

    let pointer = new ListNode(null, head);

    let prev = pointer;
    let current = head;
    let after = head.next;
    while (current && after) {
        console.log(`the current order is: ${prev.val} -> ${current.val} -> ${after.val}`);
        if (current.val == after.val) {
            let newCurrent = after.next;
            while (true) {
                if (!newCurrent) {
                    prev.next = null;
                    return pointer.next;
                } else if (newCurrent && newCurrent.val != current.val) {
                    prev.next = newCurrent;
                    current = newCurrent;
                    after = newCurrent.next;
                    break;
                } else if (newCurrent && newCurrent.val == current.val) {
                    newCurrent = newCurrent.next;
                }
            }
        } else {
            prev = current;
            current = after;
            after = after.next;
        }
    }
    return pointer.next;
};

let list = createList([1, 2, 3, 3, 4, 4, 5, 5]);
printList(deleteDuplicates(list));
