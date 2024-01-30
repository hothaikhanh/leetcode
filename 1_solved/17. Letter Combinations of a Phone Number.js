var letterCombinations = function (digits) {
    if (!digits) return [];

    const keyMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    let res = [""];
    for (const digit of digits) {
        let newWord = [];
        for (word of res) {
            for (letter of keyMap[digit]) {
                newWord.push(word + letter);
            }
        }
        res = newWord;
    }

    return res;
};

console.log(letterCombinations("234"));
