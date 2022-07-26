class Avatar {
    constructor(x,y,coins) {
        this.x = x;
        this.y = y;
        this.coins = coins;
    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    get getCoins() {
        return this.coins;
    }

    setX(value) {
        if ((this.x+value) >= 0) {return this.x+=value}
        return `Can't move to negative values!`;
    }

    setY(value) {
        if ((this.y+value) >= 0) {return this.y+=value}
        return `Can't move to negative values!`;
    }

    setCoins(value) {
        if ((coins+value) >= 0) {return coins+=value}
        return `You can't afford that!`;
    }

    moveFoward() {
        return this.setY(1);
    }

    moveBackward() {
        return this.setY(-1);
    }

    moveRight() {
        return this.setX(1);
    }

    moveLeft() {
        return this.setX(-1);
    }
}

function createAvatar(_x,_y,_coins) {
    let x = _x;
    let y = _y;
    let coins = _coins;

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    function getCoins() {
        return coins;
    }

    function setX(value) {
        if ((x+value) >= 0) {return x+=value}
        return `Can't move to negative values!`;
    }

    function setY(value) {
        if ((y+value) >= 0) {return y+=value}
        return `Can't move to negative values!`;
    }

    function setCoins(value) {
        if ((coins+value) >= 0) {return coins+=value}
        return `You can't afford that!`;
    }

    function moveFoward() {
        return setY(1);
    }

    function moveBackward() {
        return setY(-1);
    }

    function moveRight() {
        return setX(1);
    }

    function moveLeft() {
        return setX(-1);
    }

    return { getX , getY , getCoins , setCoins , moveFoward , moveBackward , moveRight , moveLeft }
}

const avatar1 = createAvatar(3,3,0);
const avatar2 = new Avatar(5,5,1)