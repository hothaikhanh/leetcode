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

var addTwoNumbers = function (l1, l2) {
    let list = l1;
    doMath(l1, l2, false);

    return list;
};

function doMath(firstNum, secondNum, leftOver) {
    let sum = firstNum.val + secondNum.val;
    if (leftOver) sum++;
    let toCarry = sum >= 10 ? true : false;
    if (toCarry) {
        firstNum.val = sum - 10;
    } else {
        firstNum.val = sum;
    }

    if (!firstNum.next && !secondNum.next) {
        if (toCarry) firstNum.next = new ListNode(1);
        return;
    } else if (secondNum.next && !firstNum.next) {
        console.log("that's it?");
        firstNum.next = new ListNode(0);
    } else if (firstNum.next && !secondNum.next) {
        console.log("can't keep up?");
        secondNum.next = new ListNode(0);
    }
    console.log(`adding ${firstNum.next.val} and ${secondNum.next.val}`);
    doMath(firstNum.next, secondNum.next, toCarry);
}

let l1 = createList([9, 9, 9, 9, 9, 9, 9]);
let l2 = createList([9, 9, 9, 9]);

printList(addTwoNumbers(l1, l2));
