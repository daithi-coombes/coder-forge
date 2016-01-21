/**
 * @link http://darrenderidder.github.io/talks/ModulePatterns/#/
 */


// define a global
require('./lib/foo.js')
foo()


// export an anonymous function
var bar = require('./lib/bar.js')
bar()


// export a named function
var fiz = require('./lib/fiz.js').fiz
fiz()


// export an anonymous object
var buz = require('./lib/buz.js')
buz.log()


// export a named object
var baz = require('./lib/baz.js').Baz
baz.log()


// Export an anonymous prototype
var Doo = require('./lib/doo.js')
var doo = new Doo()
doo.log()


// export a named prototype
var Qux = require('./lib/qux.js').Qux
var qux = new Qux()
qux.log()
