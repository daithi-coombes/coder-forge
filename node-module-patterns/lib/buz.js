/**
 * export an anonymous object
 */
// buz.js
var Buz = function(){}

Buz.prototype.foo = function(){}

Buz.prototype.log = function(){
  console.log(this.foo)
  console.log('buz!')
}

module.exports = new Buz()
