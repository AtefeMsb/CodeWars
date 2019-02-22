class Mammel {

    constructor(sound) {
        this.sound = sound;
    }

    talk() {
        return this.sound;
    }
}

class dog extends Mammel {
    constructor() {
        super("WOOOOOOOOFF");
    }
}

let mycat = new Mammel("woof");
let x = mycat.talk()
x


