/**
 * @author daithi coombes <webeire@gmail.com>
 */

/**
 * Button Class.
 *
 * Demonstrates one of many patterns for classes and oop in javascript.
 *
 * @author foobar mcneil <foobar.mcneil@example.com>
 */
function ClassButton(){

    var self = {};

    /**
     * Just a plain old string.
     * @type {String}
     */
    self.text = 'This is a string';

    /**
     * Constructor method.
     * @Constructor
     * @member ClassButton
     * @private
     */
    var init = function(){
        console.log('constructed');
    }

    /**
     * Click callback.
     *
     * Handles clicky thingy's
     * @member ClassButton
     * @return {boolean} true - always returns true.
     */
    self.click = function(){
        console.log('you clicked');
    }

    init();
    return self;
}

var btn = new ClassButton();
btn.click();
