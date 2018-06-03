// Variables
//Declare the global variable hero and a//1. `name` which is a string (you choose the name)
var  hero = {
    name : 'Super Hero',
    heroic: true,
    inventory: [[{type: 'axe', damage: 2}],[{type: 'bow', damage: 3}],[{type: 'hammer', damage: 5}],[{type: 'morning star', damage: 5}]],
    health: 6,
    weapon: {type: 'axe', damage: 2}
};

var  enemy = {
    name : 'Super Enemy',
    heroic: true,
    inventory: [],
    health: 4,
    weapon: {type: 'fire gun', damage: 1}
};

var userName = document.getElementById('userName');
userName.innerHTML =  hero.name;

// Game logic
// Declare the following functions in global scope: `rest, pickUpItem, dealDamage, equipWeapon, doBattle`

function rest(creature) {
    creature.health = 10;
    return creature;
};

item = {type: 'sword', damage:7}
function pickUpItem(creature, item) {
    creature.inventory.push(item)
    return creature;
};

function dealDamage(attacker, defender) {
    defender.health = defender.health - attacker.weapon.damage
    return defender;
};

function equipWeapon(creature, index) {
    creature.weapon = creature.inventory[index];
    creature.inventory.shift(index);
    return creature;

};

function doBattle(heroicCreature, creature) {
    if (heroicCreature.heroic != true) {
        return null;
    } 
    while (heroicCreature.health > 0 && creature.health > 0) {
        if (heroicCreature.health > 0){
          dealDamage(heroicCreature,creature);
        }
        if (creature.health > 0){
          dealDamage(creature,heroicCreature);
        }
    }
    if (heroicCreature.health > 0) {
        console.log(hero.name + " has won the battle!")
        return heroicCreature;
    } else {
        window.alert(hero.name + " is dead!");
    }

};

// UI

var bedButton = document.getElementById("bed");
bedButton.addEventListener("onclick" , restHero);

function restHero() {
    console.log("Current hero health level is " + hero.health);
    rest(hero);
    console.log(hero.name + " health was increased to " + hero.health);
};

var weaponButton = document.getElementById("weapon");
weaponButton.addEventListener("onclick" , takeHeroWeapon,removeWeaponButton);

function takeHeroWeapon() {
    console.log(hero.name + " has picked " + hero.weapon.type);
    pickUpItem(hero, hero.weapon);
    console.log(hero.name + " has changed weapon to " + hero.weapon.type);
};

function removeWeaponButton() {

    let weaponButton1 = document.getElementById("weapon");
    weaponButton1.remove()
}
var enemyButton = document.getElementById("enemy");
enemyButton.addEventListener("onclick" , fight);

function fight() {
    console.log("Battle has started!!");
    doBattle(hero, enemy);
    enemyButton.remove();
};

var inventoryButton = document.getElementById("inventory");
inventoryButton.addEventListener("onclick" , accessInventory);

function accessInventory() {
    let indexNum = window.prompt('Choose a weapon index number from 0 to ' + hero.inventory.length + ' from your weapon inventory.')
    equipWeapon(hero, indexNum)
};

function displayStats() {
    let heroName = hero.name;
    let displayHeroName = document.getElementById("heroName")
    displayHeroName.innerHTML = "Hero name is " + heroName + ".";

    let heroHealth = hero.health;
    let displayHeroHealth = document.getElementById("heroHealth")
    displayHeroHealth.innerHTML = "Hero health is " + heroHealth + ".";


    let heroWeaponType = hero.weapon.type;
    let displayHeroWeaponType = document.getElementById("heroWeaponType")
    displayHeroWeaponType.innerHTML = "Hero weapon type is " + heroWeaponType + ".";

    let heroWeaponDamage = hero.weapon.damage;
    let displayHeroWeaponDamage = document.getElementById("heroWeaponDamage")
    displayHeroWeaponDamage.innerHTML = "Hero weapon damage is " + heroWeaponDamage + ".";
    
};


function displayInventory() {
    let heroInventory = hero.inventory
    for (let i = 0; i < heroInventory.length; i++) {
        let itemsType = heroInventory[i][0].type; 
        let itemsDamage = heroInventory[i][0].damage;
        console.log(itemsType);
        console.log(itemsDamage);
        /*
        let inventoryItems = document.getElementById("inventoryItems")
        let inventoryItems = document.getElementById("HeroInventoryList")
        var newListItem = document.createElement("li");
        newListItem.className = "weaponItem";
        newListItem.innerHTML = item;
        newListItem.appendChild(inventoryItems);
        */
    }
    
    
};



var subButton = document.getElementById('subButton');
subButton.addEventListener('onclick', updateHeroName, false); 

function updateHeroName() {
    var nameField = document.getElementById('form').value;
    var userName = document.getElementById('userName');
    hero.name = nameField;
    userName.innerHTML =  nameField;
    nameField.value = null;
    return hero.name
    
};

console.log(displayInventory());
displayStats()

displayInventory()

function updateStats() {
    displayStats()
    displayInventory()
}
