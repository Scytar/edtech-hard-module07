import Avatar from './avatar-class.js'

export default class Cowboy extends Avatar {
    #hp = 10;
    #dmg = 2;
    #ammo = 10;
    constructor(_x,_y,_coins) {
        super(_x,_y,_coins)
    }

    get ammo() {
        return this.#ammo
    }

    attack() {
        if (this.#hp>0){
            if (this.#ammo>0) {
                this.#ammo--;
                return this.#dmg;
            } else {
                console.log(`This Avatar is out of ammo!`);
                return 0;
            }
        } else {return `This Avatar is dead!`}
    }

    pickAmmo() {
        console.log(`Ammo has been picked up`)
        this.#ammo++
        return this.#ammo
    }
}