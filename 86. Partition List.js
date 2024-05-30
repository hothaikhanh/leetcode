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

var partition = function (head, x) {
    if (!head) return null;
    if (!head.next) return head;
    let start = new ListNode(null, head);
    let newListHead = new ListNode(null);
    let newListCurent = newListHead;
    let current = head;
    let prev = start;

    while (current) {
        console.log(`checking: [${prev.val} -> ${current.val}]`);
        if (current.val >= x) {
            console.log(`   NOT smaller`);
            prev = current;
            current = current.next;
        } else {
            console.log(`   smaller`);
            let deleteNode = current;
            //delete the node
            prev.next = current.next;
            current = current.next;

            // move the node to a new branch
            newListCurent.next = deleteNode;
            newListCurent = deleteNode;
            deleteNode.next = null;
        }
    }

    newListCurent.next = start.next;
    return newListHead.next;
};

let list = createList([1, 4, 3, 2, 5, 2]);
partition(list, 3);
