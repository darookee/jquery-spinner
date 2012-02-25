// Spinner
//
// Usage
//
// <div class="spinner">
//  <button class="increment">+</button>
//    <input type="number" val="0" min="0" max="0" />
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
		      value = parseInt($readout.val()),
		      max   = parseInt($readout.attr('max')),
		      min   = parseInt($readout.attr('min'));

          
      // attach buttons to input 
      $inc.live('click', function(){
        if (value < max) {
          value++;
          $readout.val(value);
        }
      });
      
      $dec.live('click', function(){
        if (value > min) {
          value--;
          $readout.val(value);
        }
      });

    });
  };
})( jQuery );

