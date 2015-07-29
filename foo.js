//console = {}
//console.log = {}.method
//console.log(anything)

var origConsole = console

var myConsole = (function Console(){

    var self = {}

    self.thisIsAProperty = 'props are fucked forever'

    self.log = function(thing){

        //do this mad stuff - maybe color code for the command line?
        origConsole.log(thing)

        //this line formats thing
        //this line writes to stdOut
    }

    self.trace = function(){
        //loop through call history stack
        //print each item to stdOut (ie self.log)
    }

    return self
}())

var thisThingyThang = ''

console.log(console.log)
console.trace()
