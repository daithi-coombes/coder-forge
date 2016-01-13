var Ajax = function(){

  this.getBooks = function(cb){

    var _cb = cb;

    $.get('books.json', function(res){
      _cb(res);
    })
  }
}
