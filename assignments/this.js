/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding represents the browsers window, global scope

* 2. Implicit binding is whatever is to the left of the dot is "this"

* 3. New binding is used when a constructor function is used. It refers to object that is created

* 4. Explicit binding is when .caal or .apply is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const me = {
  name: "Braden",
  age: 25,
  game: "CSGO",
  info() {
    console.log(
      `Hello! My name is ${this.name}, I am ${
        this.age
      } years old and my favorite game is ${this.game}.`
    );
  }
};

me.info();

// Principle 3

// code example for New Binding

function Weekend(event, location) {
  this.event = event;
  this.location = location;
  this.getOut = function() {
    console.log(
      `This weekend we will be in ${this.location} attending the ${this.event}!`
    );
  };
}
const concert = new Weekend("rock concert", "Lubbock");

concert.getOut();

// Principle 4

// code example for Explicit Binding

const js = {
  name: "JavaScript"
};

const attributes = ["challenging", "fun", "rewarding"];

function javaFeelings(attr1, attr2, attr3) {
  console.log(`${this.name}, to me, is ${attr1}, ${attr2}, and ${attr3}.`);
}

javaFeelings.call(js, attributes[0], attributes[1], attributes[2]);

javaFeelings.apply(js, attributes);
