export default class Avatar {
    #x
    #y
    #coins
    #hp = 10
    #dmg = 1;
    constructor(_x,_y,_coins) {
        this.#x = _x,
        this.#y = _y,
        this.#coins = _coins;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get coins() {
        return this.#coins;
    }

    get hp() {
        return this.#hp
    }

    get dmg() {
        return this.#dmg
    }

    get info() {
        return {
            x: this.#x,
            y: this.#y,
            coins: this.#coins,
            hp: this.#hp,
            dmg: this.#dmg
        }
    }
    
    setX(value) {
        if (this.#hp>0){
            if ((this.#x+value) >= 0) {return this.#x+=value} else {this.#x = 0}
            return `Can't move to negative values!`;
        } else {return `This Avatar is dead!`}
    }

    setY(value) {
        if (this.#hp>0){
            if ((this.#y+value) >= 0) {return this.#y+=value} else {this.#y = 0}
            return `Can't move to negative values!`;
        } else {return `This Avatar is dead!`}
    }

    setCoins(value) {
        if (this.#hp>0){
            if ((coins+value) >= 0) {return coins+=value}
            return `You can't afford that!`;
        } else {return `This Avatar is dead!`}
    }

    moveForward() {
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

    attack() {
        if (this.#hp>0){
            return this.#dmg;
        } else {return `This Avatar is dead!`}
    }

    hurt(value) {
        this.#hp-=value;
        return this.#hp;
    }
}
