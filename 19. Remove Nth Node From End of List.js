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

var removeNthFromEnd = function (head, n) {
    if (!head.next) return null;
    let current = new ListNode(0);
    current.next = head;
    let listLength = 0;
    let arr = new Array(0);
    while (current) {
        listLength++;
        arr.push(current);

        if (!current.next) {
            if (n == listLength) {
                return head.next;
            } else if (n > 1) {
                arr[listLength - n - 1].next = arr[listLength - n - 1].next.next;
            } else if (n == 1) {
                arr[listLength - n - 1].next = null;
            }
            return head;
        } else {
            current = current.next;
        }
    }
};

let list = createList([1, 2, 3]);
removeNthFromEnd(list, 3);
