/*!
 * jQuery Largest In Set- v0.1 - 7/1/2013
 * 
 */



 (function($){

  $.fn.TallestInSet = function(settings) {
    
    var config = {};
    
    if (settings) $.extend(config, settings);
    

    var maxHeight = 0;
    var maxWidth = 0;
    
    
    this.each(function() { 
      maxHeight = ($(this).height() > maxHeight ? $(this).height() : maxHeight);

      maxWidth = ($(this).width() > maxWidth ? $(this).width() : maxWidth);

      
    });
    return maxHeight;
    
  }


  $.fn.UniformHeight = function(settings) {
    
    var config = {};
    var config = {reset:false};
    if (settings) $.extend(config, settings);
    
    if (config.reset) this.css('height','')
      this.css('height',this.TallestInSet());
    return this; 
  }

 })(jQuery);