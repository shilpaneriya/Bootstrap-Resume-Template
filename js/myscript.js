/**
 * Created by KS105 on 27-Nov-15.
 */

$(document).ready(function(){
    $(".more-aboutme").click(function(){
        $(".section_holder2").slideToggle();
    });

    function preLoader() {
	$(window).on('load', function() {
	    var $preloader = $('#preloader'),
	        $triangle3   = $preloader.find('#triangle3');
	    $triangle3.fadeOut();
	    $preloader.delay(300).fadeOut(800);
	});
} 
preLoader();

});
