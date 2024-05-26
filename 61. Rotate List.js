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

var rotateRight = function (head, k) {
    if (!head) return null;
    if (!head.next) return head;
    let arr = new Array(0);
    let pointer = new ListNode(0, head);
    let current = pointer.next;
    while (current) {
        arr.push(current);
        if (!current.next) {
            if (k > arr.length) {
                k = k % arr.length;
            }
            if (k == arr.length || k == 0) {
                return pointer.next;
            }
            rotateList(pointer, head, arr[arr.length - k - 1], arr[arr.length - k], arr[arr.length - 1]);
            return pointer.next;
        }
        current = current.next;
    }
};

function rotateList(pointer, head, cutOff, startSwap, end) {
    pointer.next = startSwap;
    end.next = head;
    cutOff.next = null;
}

let list = createList([0, 1, 2]);
printList(rotateRight(list, 6));

// let end = arr[arr.length - 1];
// let startSwap = arr[arr.length - k];
// let cutOff = arr[arr.length - k - 1];
