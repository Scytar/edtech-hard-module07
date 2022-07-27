export default function createAvatar(_x,_y,_coins) {
    let x = _x;
    let y = _y;
    let coins = _coins;
    let hp = 10;
    let dmg = 1;

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
        if (hp>0) {
            if ((x+value) >= 0) {return x+=value}
            return `Can't move to negative values!`;
        } else {return 'This avatar is dead!'}
    }

    function setY(value) {
        if (hp>0) {
            if ((y+value) >= 0) {return y+=value}
            return `Can't move to negative values!`;
        } else {return 'This avatar is dead!'}
    }

    function getHP() {
        return hp;
    }

    function getDMG() {
        return dmg;
    }

    function getInfo() {
        return {
            x: x,
            y: y,
            coins: coins,
            hp: hp,
            dmg: dmg
        }
    }

    function setCoins(value) {
        if (hp>0) {
            if ((coins+value) >= 0) {return coins+=value}
            return `You can't afford that!`;
        } else {return 'This avatar is dead!'}
    }

    function moveForward() {
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

    function attack() {
        if (hp>0) {
            return dmg;
        } else {return 'This avatar is dead!'}
    }
    
    function hurt(value) {
        hp-=value;
        return hp;
    }

    return { getX , getY , getCoins , getInfo, setCoins , getHP , getDMG , moveForward , moveBackward , moveRight , moveLeft , attack, hurt}
}