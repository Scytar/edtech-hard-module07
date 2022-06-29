const factorialInput = document.getElementById('factorialInput');
const eulerButton = document.getElementById('eulerButton');
const primeButton = document.getElementById('primeButton');
const piButton = document.getElementById('piButton');
const pokerButton = document.getElementById('pokerButton');
const pokerResult = document.getElementById('pokerResult');
const pokerTable = document.getElementById('pokerTable');

//Recursive factorial
// function myFactorial(num) {
//     num = BigInt(num);
//     if (num >= 2n) return num *= myFactorial(num-1n);
//     else return 1n;
// }

//Iteration factorial
function myFactorial(num) {
    // console.time('factorial');
    num = BigInt(num);
    let factorial = 1n;
    while (num > 1n) {
        factorial *= num;
        num--;
    }
    // console.timeEnd('factorial');
    return factorial;
}

function eulerNum() {
    console.time('euler');
    let sum = 0n;
    
    for (let i = 0n; i < (10n ** 3n); i++) {
        sum += ((10n ** 100n)/myFactorial(i));
    }
    console.timeEnd('euler');
    return sum;
}

function primeNumbers(num) {
    console.time('prime');
    num = parseInt(num);
    // Declare array with the only even prime
    const primesArray = [2];
    
    //Iterate through odd numbers up to 'num'**(1/2)
    let i = 3;
    while (i <= num) {
        let isPrime = true;
        
        let count = 3;
        while (count <= parseInt(i**(1/2)+1)) {
            if ((i % count) === 0) isPrime = false;
            count += 2;
        }

        if (isPrime) primesArray.push(i);
        i += 2;
    }
    
    console.timeEnd('prime');
    return primesArray;
}

function calcPi() {
    console.time('nilakantha');
    let nilakantha = 0n;
    let i = 4n;
    while (i < 10n ** 6n) {
        nilakantha += (((10n ** 1020n)/((i-2n)*(i-1n)*(i)))) - ((10n ** 1020n)/((i)*(i+1n)*(i+2n)));
        i += 4n;
    }
    console.timeEnd('nilakantha');
    return (((4n*nilakantha)+(3n*10n ** 1020n))/(10n ** 920n));
}

// Faster alternative to Nilakantha
// function calcPi() {
// console.time('piAlternative');
//     let i = 1n;
//     let x = 3n * (10n ** 1020n);
//     let pi = x;
//     while (x > 0) {
//             x = x * i / ((i + 1n) * 4n);
//             pi += x / (i + 2n);
//             i += 2n;
//     }
// console.timeEnd('piAlternative');
//     return (pi / (10n ** 20n));
// }

// 3 1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989n
// 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 Actual 100 digits of Pi
// 3 1415926535 8979323646 2631383241502824197167399123102542973924691305812308872490982646724023237801912628695705339138515696660340163997440344629173824839453851735089494768272976787701890345489075074776341140690143807508234634586738967715080516472201425543317945571096387031186295612687045123638184168432287992093948376846763556994905593965490694421563315662910472067465655221470248872788286298459390730982864992356014723037024148553474927761308897830345599001810608421752093035198413278546117746627389133157298164242025387875175725967747326768978102756343296044103428700318223050490371715063956187318796689466251680660981609329890537253918207499888371278175690208555146410374844075991611381607660045465514257689351561478841088035852757362442320487283877525090702774614922645291758530798623672116656446213151484427934406581382726802175343564176994676493786506127034998741680385264100448058220277673404510255984522220193507816341947295495012609548548863520733293931080488767606290241588320931904421932291827243671250414636120n

//Create Cards Array
const cardsArray = [];
//Fill Cards Array
for (let suit = 0; suit < 4; suit++) {
    for (let value = 2; value <= 14; value++) {
        const newCard = {
            suit: suit,
            value: value
        };
        cardsArray.push(newCard);
    }
}

function shuffleDeck(array) {
    return array.sort(()=> Math.random() - 0.5);
}

function checkRepeated(array) {
    // Store how many of the same value cards are in hand array
    let sameCardArray = [];

    // Iterate through hand array
    for (let i = 0; i < array.length; i++) {
        
        // Iterate through the remaining cards of hand array
        for (let c = i+1; c < array.length; c++) {
            // Add an instance of the value in an array if the value repeats (doesn't account for the suit of the card)
            if (array[i].value === array[c].value) {
                sameCardArray.push(array[i]);
            }
        }
    }
    if (sameCardArray.length === 1) pokerResult.textContent = "You've got a pair!";
    if (sameCardArray.length === 2) pokerResult.textContent = "You've got two pairs!";
    if (sameCardArray.length === 3) pokerResult.textContent = "You've got three of a kind!";
    if (sameCardArray.length === 4) pokerResult.textContent = "You've got a Full House!";
    if (sameCardArray.length === 6) pokerResult.textContent = "You've got four of a kind!";
    return null;
}

function sortCard(array) {
    // Sort by suit
    array.sort(function (a,b){
        if (a.suit > b.suit) return 1;
        if (a.suit < b.suit) return -1;
        return 0;
    });
    // Sort by value
    array.sort(function (a,b){
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });
    return null;
}

function checkSequence(array) {
    sortCard(array);
    if (
        array[0].value === array[1].value-1 &&
        array[0].value === array[2].value-2 &&
        array[0].value === array[3].value-3 &&
        array[0].value === array[4].value-4
    )   {
        pokerResult.textContent = "You've got a Straight!";
        if (
            array[0].suit === array[1].suit &&
            array[0].suit === array[2].suit &&
            array[0].suit === array[3].suit &&
            array[0].suit === array[4].suit
        )   {
            pokerResult.textContent = "You've got a Straight Flush!";
            if (array[0].value === 10) {
                pokerResult.textContent = "You've got a Royal Flush!";
            }
        };
    };
}

function showResults() {
    pokerResult.textContent = 'Nothing! Better luck next time...';
    checkSequence(pickedCards);
    checkRepeated(pickedCards);
}

let pickedCards = [];

function pokerPick() {
    shuffleDeck(cardsArray);

    pickedCards = [
        // Testing purposes
        // {
        //     suit: 0,
        //     value: 10,
        //     active: true
        // },
        // {
        //     suit: 0,
        //     value: 10,
        //     active: true
        // },
        // {
        //     suit: 0,
        //     value: 10,
        //     active: true
        // },
        // {
        //     suit: 0,
        //     value: 10,
        //     active: true
        // },
        // {
        //     suit: 0,
        //     value: 11,
        //     active: true
        // }
    ];

    //Reset table
    pokerTable.innerHTML = '';
    for (let i = 0; i < 5; i++) {

        //Push card into pickeds array
        pickedCards.push(cardsArray[i]);//                UNCOMMENT ME!!!     UNCOMMENT ME!!!     UNCOMMENT ME!!!     UNCOMMENT ME!!!
        
        //Set table row and cells
        const row = pokerTable.insertRow(i);
        const suitCell = row.insertCell(0);
        const valueCell = row.insertCell(1);

        //Name the suit                                   CHANGE BACK TO cardsArray
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
    showResults();
    return null;
}

factorialInput.addEventListener('input', (e)=>{console.log((myFactorial(e.target.value)))})
eulerButton.addEventListener('click', ()=>{console.log(eulerNum())});
primeButton.addEventListener('click', ()=>{console.log(primeNumbers(100000))})
piButton.addEventListener('click', ()=>{console.log(calcPi())})
pokerButton.addEventListener('click', ()=>{pokerPick()})