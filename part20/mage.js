import Avatar from './avatar-class.js'

export default class Mage extends Avatar {
    #hp = 10;
    #dmg = 3;
    #mp = 10;
    #isRegenerating = false;
    constructor(_x,_y,_coins) {
        super(_x,_y,_coins)
    }

    get mp() {
        return this.#mp
    }

    attack() {
        if (this.#hp>0){
            if (this.#mp>0) {
                this.#mp--;
                return this.#dmg;
            } else if (!this.#isRegenerating) {
                this.regenMP();
                this.#isRegenerating = true;
                console.log(`This Avatar has no MP!`);
                return 0;
            } else {console.log(`The Mage is regenerating MP`)}
        } else {return `This Avatar is dead!`}
    }

    regenMP() {
        setTimeout(()=>{
            console.log(`Mage used MP potion!`)
            this.#mp = 10;
            this.#isRegenerating = false;
            return this.#mp
        }, 10000)
    }
}