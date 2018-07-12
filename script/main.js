function showContent() {
	$('btn-showcontent').click(function() {
		$('.demo').toggleClass('hidden');
	});
};
AOS.init({
  duration: 1800,
});
