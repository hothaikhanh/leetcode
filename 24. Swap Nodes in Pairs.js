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

var swapPairs = function (head) {
    if (!head) return null;
    if (!head.next) return head;

    let current = new ListNode(0);
    current.next = head;

    swapNode(current, head, head.next);

    return current.next;
};

function swapNode(prev, firstNode, secondNode) {
    if (!firstNode && !secondNode) {
        //if the list has even number of nodes
        console.log("case 1");

        return;
    } else if (firstNode && !secondNode) {
        //if the list has odd number of nodes
        console.log("case 2");

        return;
    } else {
        console.log("case 3");
        console.log(`the values are ${firstNode.val} and ${secondNode.val}`);

        let thirdNode = secondNode.next;
        prev.next = secondNode;
        secondNode.next = firstNode;
        firstNode.next = thirdNode;

        swapNode(firstNode, firstNode.next, firstNode.next ? firstNode.next.next : null);
    }
}

let list = createList([1, 2, 3, 4, 5]);
printList(swapPairs(list));
