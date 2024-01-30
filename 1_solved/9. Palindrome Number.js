
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    var x_digit = 1;
    var x_reversed = 0;
    var checkDigit = 0;
    
    
    if(x >= 10){
        while( x > checkDigit){
            x_digit++
            checkDigit = Math.pow(10, x_digit)
        }
    }
    
    
    for(let i = 1, j = x; i <= x_digit; i++){
        currentDigit = j % 10
        x_reversed += currentDigit * Math.pow(10,(x_digit - i))
        j = Math.floor(j/10)
    }

    return(x == x_reversed)
};

console.log(isPalindrome(101))
