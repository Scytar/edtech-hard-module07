const startButton = document.querySelector('#startButton');
const result = document.querySelector('#result');
const card1Div = document.querySelector('#card1');
const card2Div = document.querySelector('#card2');
const card3Div = document.querySelector('#card3');

//Instanciates a Bingo Card
function createCard() {
    const card = []

    //Fill card with numbers
    while (card.length < 10) {
        const newItem = {
            value: (1+(Math.floor(Math.random()*75))),
            checked: false
        }

        //Check duplicated values        
        if (!card.some((e)=>{return (e.value === newItem.value)})){
            card.push(newItem)
        }        
    }

    card.sort((a,b)=>{
        return a.value - b.value;
    })

    //Lists card info
    function getList() {
         return card
    }

    //Mark a card number as checked
    function checkNum(index) {
        card[index]['checked'] = true

        return card[index]
    }

    //Checks if all numbers in card are marked
    function verifyBingo() {
        const bingo = card.filter((e)=>{
            return e['checked']
        })

        return (bingo.length >= 10) ? true : false;
    }

    return {getList, checkNum, verifyBingo}
}

//Instanciates a Bingo Raffler
function raffler(min, max) {
    const numbers = []

    for (let i = min; i <= max; i++) {
        numbers.push({
            value: i,
            drawn: false
        })
    }

    //List all numbers
    function getList() {
        return numbers
    }

    //Pick a random number
    function drawNumber() {
        let picked = numbers[Math.floor(Math.random()*numbers.length)];
        //Repick if number has already been picked
        while (picked.drawn) {
            picked = numbers[Math.floor(Math.random()*numbers.length)]
        }
        picked.drawn = true;

        return picked
    }

    //Filters numbers array with drawn elements, if all elements were drawn, returns true
    function checkDrawn() {
        const drawnNumbers = numbers.filter((e)=>{return e.drawn})
        if (drawnNumbers.length === (max-min+1)) return true; else return false
    }

    return {getList, drawNumber, checkDrawn}
}

//Render card
function renderCard(array, div) {              
    for (let i = 0; i < array.length; i++) {
        div.innerHTML += `<span id='${div.id}${i}'>${(array[i]['value']).toString().padStart(2,'0')}</span>`
    }

    for (let i = 0; i < array.length; i++) {
        document.getElementById(`${div.id}${i}`).addEventListener('click', (e)=>{checkNum(e.target)})
    }
}

function checkNum(element) {
    const wasDrawn = (raffle.getList()).filter((e)=>{return e.value == parseInt(element.textContent)}).filter((e)=>{return e.drawn})

    if (wasDrawn.length > 0) {
        element.classList.add('checked');

        //Get card instance
        let _card = null;
        switch ((element.id).substring(4,5)) {
            case '1':
                _card = card1;
                break;
            case '2':
                _card = card2;
                break;
            case '3':
                _card = card3;
                break;
        }

        //Mark element as checked
        _card.checkNum(parseInt((element.id).substring(5,6)));

        //Display win message
        if (_card.verifyBingo()) {
            result.innerHTML = `O Cartão ${(element.id).substring(4,5)} ganhou!`;
            stopInterval();
        };
    }
}

function stopInterval(){
    clearInterval(raffleTimer);
}

const card1 = new createCard();
const card2 = new createCard();
const card3 = new createCard();
const raffle = new raffler(1,75);

let raffleTimer = null;

renderCard(card1.getList(), card1Div);
renderCard(card2.getList(), card2Div);
renderCard(card3.getList(), card3Div);

startButton.addEventListener('click', (e)=>{
    if (raffleTimer === null) {
        startButton.style.display = 'none'
        result.innerHTML = raffle.drawNumber().value;
        raffleTimer = setInterval((e)=>{
            if (!raffle.checkDrawn()) {
                result.innerHTML = raffle.drawNumber().value;
            } else {
                stopInterval();
            }
        }, 5000);
    }
})