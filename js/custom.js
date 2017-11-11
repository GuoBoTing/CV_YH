$(document).ready(function(){

	// header color change
	// $(window).on("scroll", function(){
	// 	var scrollDistance = $(window).scrollTop();
	// 	var $header = $(".js-header");
	// 	if (scrollDistance > 80) { 
	// 		$header.addClass("header-colored") 
	// 	}
	// 	else {
	// 		$header.removeClass("header-colored")
	// 	}
	// })

	// initialize plugin WOW
	if (screen.width > 768) {
		new WOW().init();
	}
	
	// finctbox plugin option
	$("[data-fancybox]").fancybox({
		loop:true
	});
})