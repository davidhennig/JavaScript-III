/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding - When in the global scope, "this" will exist in the main container of the entire JavaScript application or web page
 * 2. Implicit Binding - Whenever there is a dot before a function, when the function is called, the object left of the dot gets 'this'
 * 3. New Binding - 'this' refers to a created object that is returned by the constructor function.
 * 4. Explicit Binding - Whenever call or apply method is used
 *
 * write out a code example of each explanation above
 */

// Principle 1
function myName(name) {
  console.log(this);
  return name;
}
myName("David");
// code example for Window Binding

// Principle 2
const myHello = {
  hello: "Hello",
  introduce: function(name) {
    console.log(`${this.hello} I am ${name}`);
    console.log(this);
  }
};
myHello.introduce("David");
// code example for Implicit Binding

// Principle 3
function Introduction(person) {
  this.meeting = "hello";
  this.hi;
  this.convo = function() {
    console.log(this.meeting + this.hi);
    console.log(this);
  };
}
const dave = new Introduction("other person");
dave.convo();
// code example for New Binding

// Principle 4
function Introduction(person) {
  this.meeting = "hello";
  this.hi;
  this.convo = function() {
    console.log(this.meeting + this.hi);
    console.log(this);
  };
}
const me = new Introduction("otherPerson");
me.convo.call("otherPerson");
// code example for Explicit Binding
