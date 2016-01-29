/**
 * Export an anonymous prototype
 */
// doo.js
var Doo = function(){
  this.bing = "bang"
}

Doo.prototype.wwww = function(){
  console.log('a;lsdkfja;lskdjf;laksdjf;laksdfj;laksdjf;')
}

Doo.prototype.log = function(){
  console.log(this.bing)
  this.wwww()
  console.log('doo!')
}

module.exports = Doo
