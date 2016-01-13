/**
 * $('#element').attr('class', 'foobar');
 */


/**
 * @class
 * @constructor
 */
var jQuery = function(el){

  //private method
  function _private(){

    //a;lsdkfja;lsdkfja;lsdkfj
    return null;
  }

  return function(){
    //public method
    this.attr = function(attrName, attrValue){

      _private();
    }
  }
}

$ = new jQuery();

$('#element').attr('class', 'foobar');
