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
class Clock {
  constructor(template) {
    this._template = template["template"];
    this._timer = null;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(self._timer);
  }

  start = function () {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  };
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
