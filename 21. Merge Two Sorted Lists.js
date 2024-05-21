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

var mergeTwoLists = function (list1, list2) {
    function getNextNode(prev, nodeA, nodeB) {
        printList(prev);

        let smallerNode, biggerNode;

        if (!nodeA && !nodeB) {
            console.log("both is null");
            return;
        } else if (nodeA && nodeB) {
            console.log("both is good");
            smallerNode = nodeA.val > nodeB.val ? nodeB : nodeA;
            biggerNode = nodeA.val > nodeB.val ? nodeA : nodeB;
        } else if (!nodeA && nodeB) {
            console.log(nodeB.val + " is good");

            smallerNode = nodeB;
            biggerNode = null;
        } else if (!nodeB && nodeA) {
            console.log(nodeA.val + " is good");

            smallerNode = nodeA;
            biggerNode = null;
        }

        prev.next = smallerNode;
        console.log(`smaller one is: ${smallerNode.val}`);
        console.log("");

        getNextNode(prev.next, smallerNode.next, biggerNode);

        return prev.next;
    }

    let pointer = new ListNode(null);
    if (!list1 && !list2) {
        return null;
    }
    return getNextNode(pointer, list1, list2);
};

let list1 = createList([2, 4]);
let list2 = createList([3, 5]);
printList(mergeTwoLists(list1, list2));
