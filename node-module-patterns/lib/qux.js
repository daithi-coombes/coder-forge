/**
 * export a named prototype
 */
// qux.js
var Qux = function(){}

Qux.prototype.log = function(){
  console.log('Baz!')
}

exports.Qux = Qux
