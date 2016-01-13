

/**
 * @class express
 */
function express(){

    this.url = ''

    /**
     * @method
     */
    this.get = function(doda, timeOutFromUser){

        this.url = doda;

        this.timeout = timeOutFromUser
    }
}
// end @class



var myThingy = new express()

myThingy.get('http://google.ie', 1234)

console.log(myThingy.url)
