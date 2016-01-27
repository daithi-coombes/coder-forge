# intro to coding (slides)

### slide 1 - variables
```javascript

// this is a comment

// variables
var myString = 'this is my string'
var myInteger = 10
var my_other_integer = 15

alert(myString+' \nand here is the sum: '+(myInteger+my_other_integer))
```

### slide 2 - keywords (inc operators)
```javascript
// keywords are reserved words, they do special things and can't be used as variable names

// var is a keyword for defining a variable. This will throw an Error
var var = 'foobar'

// function is a keyword for defining a function. Will throw an Error
var function = 'oops'

// so is new, for constructing a class into an object (see slide)
var new = 'what went wrong?'

// some languages, very few, let characters be variable names! (eg jQuery library)
var $ = 'my variable name is dollar!'
```

### slide 3 - functions
```javascript
// function, follows same naming conventions (namespacing) as variables
function doThisCode(){
  // put code in here
  // usually this is multiple lines
  // and it would `return` a value
}
doThisCode()    // call the function (or run the function)

// functions can also be stored in variables
var myFunc = doThisCode
myFunc()
```

### slide 4 - classes
```javascript
// a class is a function with functions in it.
function MyClass(){

  // an internal function, aka method. This is public, can be called outside of class
  this.myMethodPublic = function(){
    // block of code here
  }

  // a private method (internal function), only callable inside class
  function myMethodPrivate(){

  }
}
```

### slide 5 - objects
```javascript
// The 'new' keywork is special. It packs the class in a variable. This is known as constructing the class as an object.
var myObj = new MyClass()

// now we can call the public method (see previous slide)
myObj.myMethodPublic()

// Error: this will throw an error, we can't call the private method.
myObj.myMethodPrivate()
```
