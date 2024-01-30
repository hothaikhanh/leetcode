var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                console.log("case 1 ");
                stack.unshift(")");
                console.log("stack is " + stack);

                break;
            case "[":
                console.log("case 2 ");

                stack.unshift("]");
                console.log("stack is " + stack);
                break;
            case "{":
                console.log("case 3 ");

                stack.unshift("}");
                console.log("stack is " + stack);
                break;
            case ")":
            case "}":
            case "]":
                checkStack();
        }

        function checkStack() {
            for (let j = 0; j < stack.length; j++) {
                if (s[i] == stack[0]) {
                    stack.shift;
                }
            }
        }
    }

    return stack == [] ? true : false;
};

console.log(isValid("({[]})"));
