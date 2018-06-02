// Variables
//Declare the global variable hero and a//1. `name` which is a string (you choose the name)
var  hero = {
    name : 'Paulina',
    heroic: true,
    inventory: [],
    health: 3,
    weapon: {type: 'axe', damage: 3}

};

// Game logic
// Declare the following functions in global scope: `rest, pickUpItem, dealDamage, equipWeapon, doBattle`

    function rest(creature) {
        creature.health = 10;
        return creature
    };

    function pickUpItem(creature, item) {
        inventory.push(item)
        return creature

    };

    function dealDamage(attacker, defender) {
        defender.health - attacker.weapon.damage
        return defender

    };