// global javascript file

var num1 = 1;
var num2 = 2;

/**
 * @class
 * @constructor
 */
function addIt(param1, param2){  //two parameters

  //public properties
  this.num1 = param1;
  this.num2 = param2;

  //public method (function internal to a function)
  this.getSum = function(){
    var sum = this.num1 + this.num2;
    console.log('sum: '+ sum);
    sum = getVariableFromServer() * sum;
    return sum;
  }

  //private method
  function getVariableFromServer(){

    //query server with jQuery.get('/server/endpoint')

    return .75;
  }
}

var obj = new addIt(num1, num2);

var total = obj.getSum();

console.log(total);
console.log(obj.num1);
console.log(obj.num2);

console.log('************************')

obj.num1 = 12;
obj.num2 = 21;
console.log(obj.getSum())

console.log('************************')

var mikeyMouse = new addIt();
mikeyMouse.num1 = 120;
mikeyMouse.num2 = 210;
console.log(mikeyMouse.getSum());
