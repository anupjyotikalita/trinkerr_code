function printPrimeNumbers(num1, num2) {
    const lowerNumber = binaryToDecimal(num1);
    const higherNumber = binaryToDecimal(num2);

    for(let i=lowerNumber; i<= higherNumber; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (i > 1 && isPrime) {
            console.log(i);
        }
    }
}


function binaryToDecimal(num) {
    const decimal = parseInt(num, 2);

    return decimal;
}

printPrimeNumbers(101, 11111)


