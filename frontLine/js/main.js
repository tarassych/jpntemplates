$(document).ready(function(){
	$('.features__items').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 577,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			}
		}]
	});

	$('.download-btn').on('click', function() {
		let ctgr = $(this).data('target');

		if(!$('#'+ctgr).hasClass('active')) {
			$('.download__category').removeClass('active');
			$('#'+ctgr).addClass('active');

			$('.download-btn').removeClass('active');
			$(this).addClass('active');
		}
	})

	$('.header__toggler').on('click', function() {
		$('.header__navbar.mobile').toggleClass('show');
	})
});