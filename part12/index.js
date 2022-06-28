const factorialInput = document.getElementById('factorialInput');
const eulerButton = document.getElementById('eulerButton');
const primeButton = document.getElementById('primeButton');
const piButton = document.getElementById('piButton');

function myFactorial(num) {
    num = BigInt(num);
    if (num >= 2n) return num *= myFactorial(num-1n);
    else return 1n;
}

function eulerNum() {
    let sum = 0;
    //Opera GX browser triggers infinte loop protection for counter>(2**13)
    for (let i = 0; i < (2 ** 13); i++) {
        sum += (1/myFactorial(i));
    }
    return sum;
}

function primeNumbers(num) {
    num = parseInt(num);
    const primesArray = [];
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        
        for (let count = 2; count <= parseInt(i/2); count++) {
            if ((i % count) === 0) isPrime = false;
        }

        if (isPrime) primesArray.push(i);
    }
    return primesArray;
}

function calcPi() {
    let nilakantha = 0;
    let i = 4;
    while (i < 10000) {
        console.log(nilakantha)
        nilakantha += ((1/((i-2)*(i-1)*(i)))) - (1/((i)*(i+1)*(i+2)));
        i += 4;
    }
    return ((((4*nilakantha)+3)).toFixed(100));
}

factorialInput.addEventListener('input', (e)=>{console.log((myFactorial(e.target.value)))})
eulerButton.addEventListener('click', ()=>{console.log(eulerNum())});
primeButton.addEventListener('click', ()=>{console.log(primeNumbers(100000))})
piButton.addEventListener('click', ()=>{console.log(calcPi())})


// 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 Actual 100 digitos of Pi
// 3.1415926535 8975980930 7224713847 9724526405 3344726562 5000000000 0000000000 0000000000 0000000000 0000000000 My current result