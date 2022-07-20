const result = document.querySelector('#result');
const cards = [];

function deckShuffle() {

    return new Promise((resolve, reject) => {

        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            return reject(result.innerHTML = 'Failed to fetch deck data')
        })
        .then(data => {
            cards.push({
                id: data['deck_id'],
                suit: data['cards'][0]['suit'],
                value: data['cards'][0]['value'],
                image: data['cards'][0]['image']
            });
            resolve(
                cardPick(data['deck_id'])
            );
        })
        .catch(err => {result.innerHTML = err})
    })
}

function cardPick() {

    if (cards.length < 5) {
        return new Promise((resolve, reject) => {

            fetch(`https://deckofcardsapi.com/api/deck/${cards[0]['id']}/draw/?count=1`)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                return reject(result.innerHTML = `Failed to fetch card[${cards.length}] data`)
            })
            .then(data => {
                cards.push({
                    id: data['deck_id'],
                    suit: data['cards'][0]['suit'],
                    value: data['cards'][0]['value'],
                    image: data['cards'][0]['image']
                });
                resolve(
                    cardPick(data['deck_id'])
                );})
            .catch(err => {result.innerHTML = err})
        })
    } else {
        return true;
    }
}

async function renderCards() {
    const render = await deckShuffle();

    if (render) {
        result.innerHTML = ``
        for (let i = 0; i < cards.length; i++) {
            result.innerHTML += `
                <img src=${cards[i]['image']}>
            `
        }
    }
}

renderCards();