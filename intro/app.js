/**
 * @author daithi coombes <webeire@gmail.com>
 */

// dataType variable
var element = "this is an element";

// dataType function
function foo(){
    element = "foo";
}

// dataType object
function fooObj(){

    //private
    var this_is_internal_variable = 'Hidden inside fooObj()';

    //public - internal function also known as 'method'
    this.updateElement = function(){
        element = "fooObj";
    }
}

// dataType var's initial state (var element)
console.log(element);

// call function (function foo())
foo();
console.log(element);

// create obj & call method (fooObj.updateElement())
var myObject = new fooObj();
myObject.updateElement();
console.log(element);
