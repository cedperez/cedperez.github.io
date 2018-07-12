$('.menu-toggle').click(function() {
	$('.site-nav').toggleClass('site-nav-open', 400);
	$(this).toggleClass('open');

})
// $('.site-nav a').mouseover(function() {
// 	$('.fa').toggleClass('icon-hover');
// })
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 400) {
		$('.menu-toggle').addClass('position-fixed');
		$('.hamburger').addClass('position-fixed');
		$('.site-nav').addClass('position-fixed');
	} else {
		$('.menu-toggle').removeClass('position-fixed');
		$('.hamburger').removeClass('position-fixed');
	}
});