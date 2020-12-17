//Nomer 1
console.log("Nomer 1");
// Release 0

class Animal {
  constructor(name, legs = 4, cold_blooded = false) {
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1

class Ape extends Animal {
  constructor(name) {
    super(name, 2, false);
  }

  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name, 2, false);
  }

  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

console.log("\n");

//Nomer 2
console.log("Nomer 2");
