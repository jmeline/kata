//
// http://blog.jeremyfairbank.com/javascript/functional-javascript-lists-1/
// Example of functional javascript linked lists
//

var Nil = {
  isEmpty: true,
  get head() {
    throw new Error("Accessing Head on empty list");
  },

  get tail() {
    throw new Error("Accessing Tail on empty list");
  }
}

const Cons = function(head, tail) {
  this.head = head;
  this.tail = tail;
  this.toString = function() {
    return "head:" + this.head;
  }
};

const cons = function(head, tail) {
  return new Cons(head, tail);
}

const map = function(list, fn) {
  if (list.isEmpty) {
    return list;
  }

  // returning cons means that we preserve immutablility as
  // we are not modifying the original list
  return cons(fn(list.head), map(list.tail, fn));
}

const reduce = function(list, fn, initial) {
  if (list.isEmpty) {
    return initial;
  }

  return reduce(list.tail, fn, fn(initial, list.head));
}

Cons.prototype.map = function(fn) {
  return cons(fn(this.head), this.tail.map(fn));
}

Nil.map = function() {
  return this;
}

Cons.prototype.reduce = function(fn, initial) {
  return this.tail.reduce(fn, fn(initial, this.head));
}

Nil.reduce = function(fn, initial) {
  return initial;
}

const listPrinter = function(list, fn) {
  if (!list.isEmpty) {
    fn(list.toString());
    listPrinter(list.tail, fn);
  }
}

const printer = x => console.log(x);
// let list = new Cons(1, new Cons(2, new Cons(3, new Cons(4, Nil))));
let list = cons(1, cons(2, cons(3, cons(4, Nil))));
console.log("original list: ");
listPrinter(list, printer);

// let mappedList = map(list, x => x * 2);
// console.log(mappedList);
let mappedList = list.map(x => x+"");
let result = reduce(mappedList, (a,b) => a + b, 1);

console.log("result from reducedList: " + result);
console.log("Printer");
listPrinter(mappedList, printer);
