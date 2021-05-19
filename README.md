# Object.prototype.__proto__

The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.

The use of __proto__ is controversial and discouraged. It was never originally included in the ECMAScript language spec, but modern browsers implemented it anyway. Only recently was the __proto__ property standardized by the ECMAScript 2015 specification for compatibility with web browsers, so it will be supported into the future. It is deprecated in favor of Object.getPrototypeOf/Reflect.getPrototypeOf and Object.setPrototypeOf/Reflect.setPrototypeOf (though still, setting the [[Prototype]] of an object is a slow operation that should be avoided if performance is a concern).

The __proto__ property can also be used in an object literal definition to set the object [[Prototype]] on creation, as an alternative to Object.create(). See: object initializer / literal syntax.

## Description

The __proto__ getter function exposes the value of the internal [[Prototype]] of an object. For objects created using an object literal, this value is Object.prototype. For objects created using array literals, this value is Array.prototype. For functions, this value is Function.prototype. For objects created using new fun, where fun is one of the built-in constructor functions provided by JavaScript (Array, Boolean, Date, Number, Object, String, and so on — including new constructors added as JavaScript evolves), this value is always fun.prototype. For objects created using new fun, where fun is a function defined in a script, this value is the value of fun.prototype. (That is, if the constructor didn't return an other object explicitly, or the fun.prototype has been reassigned since the instance was created.)

The __proto__ setter allows the [[Prototype]] of an object to be mutated. The object must be extensible according to Object.isExtensible(): if it is not, a TypeError is thrown. The value provided must be an object or null. Providing any other value will do nothing.

To understand how prototypes are used for inheritance, see guide article Inheritance and the prototype chain.

The __proto__ property is a simple accessor property on Object.prototype consisting of a getter and setter function. A property access for __proto__ that eventually consults Object.prototype will find this property, but an access that does not consult Object.prototype will not. If some other __proto__ property is found before Object.prototype is consulted, that property will hide the one found on Object.prototype.

## Examples

### Using __proto__

```javascript
function Circle() {}
const shape = {};
const circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === Circle);  // false

const ShapeA = function () {};
const ShapeB = {
    a() {
        console.log('aaa');
    }
};
console.log(ShapeA.prototype.__proto__ = ShapeB);

const shapea = new ShapeA();
shapea.a(); // aaa
console.log(ShapeA.prototype === shapea.__proto__); // true

// or
const ShapeC = function () {};
const ShapeD = {
    a() {
        console.log('a');
    }
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false

// or
function Test() {}
Test.prototype.myname = function () {
    console.log('myname');
};

const a = new Test();
console.log(a.__proto__ === Test.prototype); // true
a.myname(); // myname

// or
const fn = function () {};
fn.prototype.myname = function () {
    console.log('myname');
};

var obj = {
    __proto__: fn.prototype
};

obj.myname(); // myname
```

## Object.create()

The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

```javascript
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

### Syntax

```javascript
Object.create(proto)
Object.create(proto, propertiesObject)
```

