// variable
var num1 = 5


// function
var increment_by_five = function(num){
  return num+5
}

var res = increment_by_five( num1 )
console.log('increment_by_five(): '+res)


// class
function IncrementClass(){

  // set this object in current scope
  var self = this

  // property
  self.num

  // public method
  self.setNum = function(num){
    self.num = num
  }

  // public method
  self.plusFive = function(){
    doWork()
    return this.num
  }

  // private method
  function doWork(){
    self.num = self.num+5
  }
}


// construct an object
var incrementor = new IncrementClass()

//call objects public method
incrementor.setNum(5)
console.log('incrementor.num(): '+incrementor.num)

//call objects private method, through public method.
var res = incrementor.plusFive()
console.log('incrementor.plusFive() '+res)


/**
// function
var increment_by_five = function(num){

  return num+5
}

// class
function IncrementClass(){

  // property
  this.num

  // public
  this.setNum = function(num){
    this.num = num
  }

  // public
  this.getResult = function(){
    return increment()
  }

  // private
  function increment(){
    console.log(this.num)
    return this.num+5
  }
}

// object
var myObject = new IncrementClass()
myObject.setNum(234567890)
console.log( myObject.getResult() )
**/
