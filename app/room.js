'use strict';

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
  }

Room.prototype.area = function(){
  return this.length * this.width;
};
Room.prototype.cost = function(){
  var price, total = 0;
  switch(this.floor){
    case 'carpet':
         price = 15;
         break;
    case 'tile':
         price = 12;
         break;
    case 'wood':
         price = 10;
         break;
  }

  total +=  (price * this.area());
  total += (this.width * this.height) * 2 * 0.50;
  total += (this.length * this.height) * 2 * 0.50;

  return total;
};
module.exports = Room;

