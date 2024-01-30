var intToRoman = function (num) {
    let a = "",
        b = "",
        c = "";

    var final = String(num)
        .split("")
        .map((digit, index) => {
            switch (String(num).length - index) {
                case 1:
                    a = "I";
                    b = "V";
                    c = "X";
                    break;

                case 2:
                    a = "X";
                    b = "L";
                    c = "C";
                    break;

                case 3:
                    a = "C";
                    b = "D";
                    c = "M";
                    break;

                case 4:
                    a = "M";
                    b = "";
                    c = "";
                    break;
            }

            let table = {
                1: a,
                2: a + a,
                3: a + a + a,
                4: a + b,
                5: b,
                6: b + a,
                7: b + a + a,
                8: b + a + a + a,
                9: a + c,
                0: "",
            };
            return table[digit];
        });
    return final.join("");
};

console.log(intToRoman(11));
