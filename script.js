let char1 = {
    name: "Shadow shaman",
    health: 100,
    attacks: [
      {
        name: "entity sap",
        dialogue: "The opponents willpower was drained!",
      },
      {
        name: "Shadow shard",
        dialogue: "The opponents armour was pierced!",
      },
      {
        name: "Ancient gloop",
        dialogue: "The opponent cannot move!",
      },
    ],
    attack() {
      let damage = Math.ceil(Math.random() * 20);
      let attack = Math.floor(Math.random() * 3);
      console.log(`${this.name} used ${this.attacks[attack].name}, ${this.attacks[attack].dialogue} which deals ${damage} damage.\n`,);    // the \n in javascript means new line!
      return damage;
    },
    //if char 1 dies to .... then this message is displayed
    die() {
      console.log(`The Shadow shaman falls back, slams onto the floor and vanishes!`,);
    },
  };
  
  let char2 = {
    name: "Armoured goblin",
    health: 100,
    attacks: [
      {
        name: "Dual punches",
        dialogue: "The opponent was smacked twice!",
      },
      {
        name: "War cry",
        dialogue: "The opponent was startled!",
      },
      {
        name: "Armour impale",
        dialogue: "The opponents armour was pierced!",
      },
    ],
    attack() {
      let damage = Math.ceil(Math.random() * 20);
      let attack = Math.floor(Math.random() * 3);
      console.log(`${this.name} used ${this.attacks[attack].name}, ${this.attacks[attack].dialogue} which deals ${damage} damage.\n`,);    // the \n in javascript means new line!
      return damage;
    },
    //if char 2 dies to .... then this message is displayed
    die() {
      console.log(`The Armoured goblin wretches in pain, drops to its knees and crashes into the ground!`,);
    },
  };
  


// a while loop set to a boolean value
  let gameRunning = true;
  while (gameRunning) {

//   first turn char 1 inflicts damage
      let damageToChar2 = char1.attack();
// char 2 takes damage
      char2.health -= damageToChar2;
//  second turn char 2 inflicts damage
      let damageToChar1 = char2.attack();
//  char 1 takes damage    
      char1.health -= damageToChar1;

//  if char 1 reaches 0 health => game becomes falsy - ends
    if (char1.health <= 0) {
      char1.die();
      gameRunning = false;
// if char 2 reaches 0 health => game becomes falsy - ends    
    } else if (char2.health <= 0) {
      char2.die();
      gameRunning = false;
    }
// loop end
  }