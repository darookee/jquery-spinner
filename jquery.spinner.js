// Spinner
//
// Usage
//
// <div class="spinner">
//  <button class="increment">+</button>
//    <input type="number" val="0" min="0" max="0" step="1" />
//  <button class="decrement">-</button>
// </div>
//

(function( $ ) {
  $.fn.spinner = function() {
    return this.each(function(){

      // setup
      var $this = $(this),
          $readout = $this.find('.readout'),
		      $inc = $this.find('.increment'),
		      $dec = $this.find('.decrement'),
		      value = parseInt($readout.val(), 10),
              step = parseInt($readout.attr('step'), 10),
		      max   = parseInt($readout.attr('max'), 10),
		      min   = parseInt($readout.attr('min'), 10);

      if( step === 0 || isNaN(step) ) {
          step = 1;
      }
          
      // attach buttons to input 
      $inc.live('click', function(){
        value = parseInt($readout.val(), 10);
        if (value < max) {
          value += step;
          if( value > max ) {
            value = max;
          }
          $readout.val(value);
        }
      });
      
      $dec.live('click', function(){
        value = parseInt($readout.val(), 10);
        if (value > min) {
          value -= step;
          if( value < min ) {
            value = min;
          }
          $readout.val(value);
        }
      });

    });
  };
}(jQuery));
