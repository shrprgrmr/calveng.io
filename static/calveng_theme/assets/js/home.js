$( document ).ready(
	function(){
		$("[id^=trace]").each(function(){
			var path = this;
			var length = path.getTotalLength();
			console.log(length);
			// Clear any previous transition
			path.style.transition = path.style.WebkitTransition =
			  'none';
			// Set up the starting positions
			//$( this ).css("stroke-opacity","1");
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = length;
			// Trigger a layout so styles are calculated & the browser
			// picks up the starting position before animating
			path.getBoundingClientRect();
			// Define our transition
			path.style.transition = path.style.WebkitTransition =
			  'stroke-dashoffset 1.25s ease-in-out';
			// Go!
			path.style.strokeDashoffset = '0';
		});
	}
);

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );