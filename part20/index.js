import Avatar from './avatar-class.js'
import createAvatar from './avatar-closure.js'
import Cowboy from './cowboy.js';
import Mage from './mage.js'

const avatar1 = createAvatar(3,3,0);
const avatar2 = new Avatar(5,5,1);
const cowboy = new Cowboy(10,10,7);
const mage = new Mage(42,42,0);

//Listens for avatar1 movement
window.addEventListener('keydown', (e)=>{
    switch (e.keyCode) {
        case 65:
            avatar1.moveLeft();
            console.log('avatar1' , avatar1.getInfo());
            break;
        case 87:
            avatar1.moveForward();
            console.log('avatar1' , avatar1.getInfo());
            break;
        case 68:
            avatar1.moveRight();
            console.log('avatar1' , avatar1.getInfo());
            break;
        case 83:
            avatar1.moveBackward();
            console.log('avatar1' , avatar1.getInfo());
            break;
    }
})

//Listens for avatar2 movement
window.addEventListener('keydown', (e)=>{
    switch (e.keyCode) {
        case 37:
            avatar2.moveLeft();
            console.log('avatar2', avatar2.info);
            break;
        case 38:
            avatar2.moveForward();
            console.log('avatar2', avatar2.info);
            break;
        case 39:
            avatar2.moveRight();
            console.log('avatar2', avatar2.info);
            break;
        case 40:
            avatar2.moveBackward();
            console.log('avatar2', avatar2.info);
            break;
        case 96:
            avatar2.hurt(9);
            console.log('avatar2', avatar2.info);
            break;
    }
})

console.log('avatar2 attacked avatar1',avatar1.getInfo(), 'avatar1 HP: '+avatar1.hurt(avatar2.dmg), avatar1.getInfo());

console.log('avatar1 attacked avatar2',avatar2.info, 'avatar2 HP: '+avatar2.hurt(avatar1.getDMG()), avatar2.info);

console.log('')

console.log('Cowboy: ',cowboy.info, 'Ammo: '+cowboy.ammo);
for (let i = 0; i < 12; i++) {
    console.log('Cowboy attacks!')
    cowboy.attack();
}
console.log('Cowboy: ',cowboy.info, 'Ammo: '+cowboy.ammo);
console.log('Ammo: '+cowboy.pickAmmo())

console.log('')

console.log('Mage: ',mage.info, 'MP: '+mage.mp);
for (let i = 0; i < 12; i++) {
    console.log('Mage casts a spell!')
    mage.attack();
}