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

var insertionSortList = function (head) {
    let sortedHead = new ListNode(null);
    let sortedCurrent = sortedHead;

    let current = head;
    let prev = new ListNode(null, head);

    let insertNode = null;
    while (current) {
        //STEP 1: Isolating the inserting node and selecting the next node as the new current
        insertNode = current;
        prev.next = prev.next.next;
        current = current.next;

        //STEP 2: Selecting a new position in the sorted list for the inserting node
        console.log(`checking node ${insertNode.val}: comparing ${insertNode.val} and ${sortedCurrent.val} `);

        //case 1: if the inserting node is BIGGER than the biggest node of the sorted list or is the first node
        if (insertNode.val >= sortedCurrent.val || sortedCurrent.val == null) {
            console.log(` case 1`);
            //push the inserting node to the end of the sorted list
            sortedCurrent.next = insertNode;
            sortedCurrent = insertNode;
            //set the inserting node as the tail of the sorted list
            insertNode.next = null;
        }

        //case 2: if the currently examed node is SMALLER than the biggest node of the sorted list
        else if (insertNode.val < sortedCurrent.val) {
            console.log(` case 2`);
            //push to the start of the sorted list and find the smallest bigger node

            //set a new pointer at the start of the sorted list
            let tempCurrent = sortedHead.next;
            let tempPrev = sortedHead;
            while (tempCurrent) {
                //traverse the sorted list to find the smallest bigger node
                if (insertNode.val < tempCurrent.val) {
                    insertNode.next = tempCurrent;
                    tempPrev.next = insertNode;
                    break;
                } else {
                    tempPrev = tempPrev.next;
                    tempCurrent = tempCurrent.next;
                }
            }
        }
    }
    return sortedHead.next;
};

let list = createList([-1, 5, 3, 4, 0]);
printList(insertionSortList(list));
