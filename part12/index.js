const factorialInput = document.getElementById('factorialInput');
const eulerButton = document.getElementById('eulerButton');
const primeButton = document.getElementById('primeButton');
const piButton = document.getElementById('piButton');
const pokerButton = document.getElementById('pokerButton');
const pokerResult = document.getElementById('pokerResult');
const pokerTable = document.getElementById('pokerTable');

function myFactorial(num) {
    num = BigInt(num);
    if (num >= 2n) return num *= myFactorial(num-1n);
    else return 1n;
}

function eulerNum() {
    let sum = 0n;
    //Opera GX browser triggers infinte loop protection for counter>(2**13)
    for (let i = 0n; i < (10n ** 3n); i++) {
        sum += ((10n ** 100n)/myFactorial(i));
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

// function calcPi() {
//     let nilakantha = 0n;
//     let i = 4n;
//     while (i < 10n ** 7n) {
//         nilakantha += (((10n ** 120n)/((i-2n)*(i-1n)*(i)))) - ((10n ** 120n)/((i)*(i+1n)*(i+2n)));
//         i += 4n;
//     }
//     return (4n*nilakantha)+(3n*10n ** 120n);
// }

function calcPi() {
    let i = 1n;
    let x = 3n * (10n ** 1020n);
    let pi = x;
    while (x > 0) {
            x = x * i / ((i + 1n) * 4n);
            pi += x / (i + 2n);
            i += 2n;
    }
    return (pi / (10n ** 20n));
}

// 3 1415926535 8979323646 2631383241 5028241971 6739912310 2542973924 6913058123 0887249098 2646724023 2378019126 28695705339138516584n
// 3 1415926535 8979323846 0643382079 502504197109399374905818454941314307714407276188994535493453541953666671346079572250754520n My current result
// 3 1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989n
// 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 Actual 100 digits of Pi
// 3.1415926535 8975980930 7224713847 9724526405 3344726562 5000000000 0000000000 0000000000 0000000000 0000000000 

//Create Cards Array
const cardsArray = [];
//Fill Cards Array
for (let suit = 0; suit < 4; suit++) {
    for (let value = 2; value <= 14; value++) {
        const newCard = {
            suit: suit,
            value: value,
            active: true
        };
        cardsArray.push(newCard);
    }
}

function shuffleDeck(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function checkPokerResults(array) {
    pokerResult.textContent = 'Nothing! Better luck next time...'
    
    return null;
}

function pokerPick() {
    shuffleDeck(cardsArray);

    const pickedCards = [];

    //Reset table
    pokerTable.innerHTML = '';
    for (let i = 0; i < 5; i++) {

        //Push card into pickeds array
        pickedCards.push(cardsArray[i]);
        
        //Set table row and cells
        const row = pokerTable.insertRow(i);
        const suitCell = row.insertCell(0);
        const valueCell = row.insertCell(1);

        //Name the suit
        let suitName = 'null'
        switch (cardsArray[i].suit) {
            case 0:
                suitName = '♠';
                break;
            case 1:
                suitName = '♦';
                break;
            case 2:
                suitName = '♣';
                break;
            case 3:
                suitName = '♥';
                break;
        }
        suitCell.innerHTML = suitName;

        //Name special cards
        let cardValue = null
        switch (cardsArray[i].value) {
            case 11:
                cardValue = 'Jack';
                break;
            case 12:
                cardValue = 'Queen';
                break;
            case 13:
                cardValue = 'King';
                break;
            case 14:
                cardValue = 'Ace';
                break;
            default:
                cardValue = cardsArray[i].value;
                break;
        }
        valueCell.innerHTML = cardValue;

    }
    checkPokerResults(pickedCards);
    return null;
}

factorialInput.addEventListener('input', (e)=>{console.log((myFactorial(e.target.value)))})
eulerButton.addEventListener('click', ()=>{console.log(eulerNum())});
primeButton.addEventListener('click', ()=>{console.log(primeNumbers(100000))})
piButton.addEventListener('click', ()=>{console.log(calcPi())})
pokerButton.addEventListener('click', ()=>{pokerPick()})