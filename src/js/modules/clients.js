export default () => {
  $(".clients-list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		prevArrow: '<svg class="arrow-left"  xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24"><g><g><path d="M0 11H.51L9.435.151l1.414 1.413L3.086 11H40v2H3.087l7.762 9.435-1.414 1.414L.51 13H0z"/></g></g></svg>',
		nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24"><g><g><path d="M0 11h36.914l-7.763-9.436L30.565.151l8.926 10.85H40v2h-.51l-8.925 10.848-1.414-1.414L36.913 13H0z"/></g></g></svg>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
					arrow: false
				}
			}
		]
	});
};