class Mammel {

    constructor(sound) {
        this.sound = sound;
    }

    talk() {
        return this.sound;
    }
}

class Dog extends Mammel {
    constructor() {
        super("WOOOOOOOOFF");
    }
}

let mycat = new Dog("woof");
mycat.sound = "new wooooooooof"
let x = mycat.talk()
x
let type = typeof Dog;
type
let y = Dog.prototype.talk
y
let z = Dog.prototype.sound
z



