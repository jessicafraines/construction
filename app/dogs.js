/*jshint -W069 */
/*global prompt:true*/
'use strict';
var prompt = require('sync-prompt').prompt;
//creating an object manually
//
var dogs = [];

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name'] = 'lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a}; //this is called json

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1, d2, d3, d4, d5);

console.log('Dogs:' , dogs);
console.log(d1 instanceof Object);
console.log(d1 instanceof Dog); //means is this object a dog


// creating objects using a constructor
//

function Dog(name, age){
  this.name = name;
  this.age = age;
}
var d6 = new Dog('fluffy', 2 ); //this is how you call a constructor 

console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog); //means is this object a dog


var option = prompt('(d) or (q)');

while(option !== 'q'){
 name = prompt('Name: ');
 age = prompt('Age: ');
 var dog = new Dog(name,age);
 dogs.push(dog);
 option = prompt('(d) or (q)');
}
console.log('All Dogs:', dogs);

