// https://www.codewars.com/kata/fixme-hello/train/javascript?fbclid=IwAR12L_hS8TwsV3BdFfnzybcnTFjBdWXj3K4pd2g5l2LnWzcZ1BPOX8yaqeU

if (!Array.prototype.insertIfNotExist) {
    Array.prototype.insertIfNotExist = function(val) {
    if (!this.includes(val)) {
        this.push(val);
    }
    return this;
    };
}

class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.helloArr = [];
  }

  setAge(age) {
    this.age = age;
    this.helloArr.insertIfNotExist("age");
    return this;
  }

  setSex(sex) {
    this.sex = sex;
    this.helloArr.insertIfNotExist("sex");
    return this;
  }

  setName(name) {
    this.name = name;
    this.helloArr.insertIfNotExist("name");
    return this;
  }

  hello() {
    let helloStr = "Hello.";

    for (let item of this.helloArr) {
      if (item === "age") {
        helloStr += ` I am ${this.age}.`;
      } else if (item === "sex") {
        helloStr += ` I am ${this.sex == "M" ? "male" : "female"}.`;
      } else if (item === "name") {
        helloStr += ` My name is ${this.name}.`;
      }
    }
    return helloStr;
  }
}

// function insertIfNotExist(arr, item) {
//     if (!arr.includes(item)) {
//         arr.push(item);
//     }
// }

const assert = require("chai").assert;

describe("ExampleTests", function() {
  it("testBob27Male", function() {
    let dm = new Dinglemouse()
      .setName("Bob")
      .setAge(27)
      .setSex("M");
    let expected = "Hello. My name is Bob. I am 27. I am male.";
    assert.equal(dm.hello(), expected);
  });
  it("test27MaleBob", function() {
    let dm = new Dinglemouse()
      .setAge(27)
      .setSex("M")
      .setName("Bob");
    let expected = "Hello. I am 27. I am male. My name is Bob.";
    assert.equal(dm.hello(), expected);
  });
  it("testAliceFemale", function() {
    let dm = new Dinglemouse().setName("Alice").setSex("F");
    let expected = "Hello. My name is Alice. I am female.";
    assert.equal(dm.hello(), expected);
  });
  it("testBatman", function() {
    let dm = new Dinglemouse().setName("Batman");
    let expected = "Hello. My name is Batman.";
    assert.equal(dm.hello(), expected);
  });
  it("testMultipleAge", function() {
    let dm = new Dinglemouse()
      .setAge(39)
      .setName("Sally")
      .setAge(39);
    let expected = "Hello. I am 39. My name is Sally.";
    assert.equal(dm.hello(), expected);
  });
});
