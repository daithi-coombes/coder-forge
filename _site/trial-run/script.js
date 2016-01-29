var name = "mike";

var num1 = 2;
var num2 = 3;

// function
function addNums(){

  var result = num1 + num2;

  $('#foobar').val(result);
}


// object
function MyObject(){

  // public method
  this.add = function(num1, num2){

    num1 = incrementNum(num1);
    num2 = incrementNum(num2);

    return num1 + num2;
  }

  // private method
  function incrementNum(num){

    return num + 1;
  }
}


// construct it
var obj = new MyObject()

var result = obj.add(234, 097654);

var result2 = obj.incrementNum(5);

alert(result);
