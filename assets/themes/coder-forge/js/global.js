var coderForge;
coderForge = new CoderForge();

function CoderForge(){

  var self = this


  $(window).ready(initWindow)

  /**
   * callback for $.window.ready
   * @return {CoderForge} Returns self for chaining.
   */
  function initWindow(){

    self.setSiteWrap();

    return self;
  }
}

/**
 * Init the site-wrap container.
 * @static
 */
CoderForge.prototype.setSiteWrap = function(){

  var winHeight = $(window).height(),
    navHeight = $('nav#header').height()

  $('.site-wrap').height(winHeight-navHeight);
}
