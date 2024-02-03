/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let open = 0,
        close = 0,
        stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                open++;
                stack.unshift(1);
                break;
            case ")":
                close++;
                if (stack[0] !== 1) return false;
                stack.shift();
                break;
            case "[":
                open++;
                stack.unshift(2);
                break;
            case "]":
                close++;
                if (stack[0] !== 2) return false;
                stack.shift();
                break;
            case "{":
                open++;
                stack.unshift(3);
                break;
            case "}":
                close++;
                if (stack[0] !== 3) return false;
                stack.shift();
                break;
        }
        console.log(stack);
        if (close > open) return false;
    }

    return open == close;
};

console.log(isValid("{[]}"));
