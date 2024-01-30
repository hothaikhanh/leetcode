/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const trash = [];
    let curIndex = 0;
    let lastIndex = s.length - 1;
    let tmp1 = "",
        tmp2 = "";
    let results = "";

    if (lastIndex == 0) {
        return s;
    }

    while (curIndex < lastIndex) {
        console.log(`////Loop no.${curIndex + 1}: current index is: ${curIndex} | last index is: ${lastIndex}`);

        let startIncrement = 0,
            lastIncrement = 0;

        // console.log("__trash contains: " + trash + "\n");
        // if (!trash.includes(s[curIndex])) {
        //check if the current index is equal to the last index

        while (curIndex + startIncrement <= lastIndex - lastIncrement) {
            //creating loop with the current index and the last index
            console.log("*Start loop*");
            console.log(
                `[${curIndex + startIncrement}]:${s[curIndex + startIncrement]}__[${lastIndex - lastIncrement}]:${
                    s[lastIndex - lastIncrement]
                }`
            );

            tmp2 = s.substring(curIndex + startIncrement, lastIndex - lastIncrement + 1);

            console.log(`   At the start tmp2 = ${tmp2}`);

            if (s[curIndex + startIncrement] != s[lastIndex - lastIncrement]) {
                console.log(`====> XXX`);
                console.log(`tmp 1 is: ${tmp1} and result is ${results}`);
                if (tmp1.length > results.length) {
                    results = tmp1;
                    console.log("result is now = tmp1");
                    tmp1 = "";
                }
            } else if (s[curIndex + startIncrement] == s[lastIndex - lastIncrement]) {
                console.log(`====> OOO`);
                if (tmp2.length > tmp1.length) {
                    tmp1 = tmp2;
                    console.log("tmp 1 is now = tmp2");
                }
            }

            console.log(`   At the end tmp1 = ${tmp1}`);

            lastIncrement++;
        }

        // trash.push(s[curIndex]);
        console.log(`___after loop no.${curIndex + 1}: 
            - final length = ${results.length}
            - substrinng = ${results}
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            \n`);

        // }

        curIndex++;
    }
    console.log(`\n\nFINALLY:`);
    console.log(results);
};
longestPalindrome("aacabdkacaa");
