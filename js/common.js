$(document).ready(function(){

	const accordion_item = $('.js--accordion-item');

	accordion_item.find('.button').on('click', function(event) {
		event.preventDefault();

		$(this).closest(accordion_item).toggleClass('open').siblings().toggleClass('open');

	});


	// const item_card = $('.sect_plan__wrap-items');

	// // item_card.each(function(index, event) {
	// 	const list_items = item_card.find('.item__top-items__item');

	// 	list_items.each(function(i,e) {
	// 		console.log(i + " " + e.offsetWidth);
	// 	});
	// // });

	

});

const swiper_init_1 = new Swiper('.js-slider-1', {
	loop: false,
	slidesPerView: 3,
  	spaceBetween: 20,

	breakpoints: {
		0: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},

		480: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
		767: {
			slidesPerView: 2.4,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		}
	}

});

const swiper_init_2 = new Swiper('.js-slider-2', {
	loop: false,
	slidesPerView: 3,
  	spaceBetween: 20,

	breakpoints: {
		0: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},

		480: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
		767: {
			slidesPerView: 2.4,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		}
	}

});

const swiper_init_3 = new Swiper('.js-slider-3', {
	loop: false,
	slidesPerView: 2,
  	spaceBetween: 20,

	breakpoints: {
		0: {
			slidesPerView: 1.1,
			spaceBetween: 10,
		},

		480: {
			slidesPerView: 1.4,
			spaceBetween: 20,
		},
		767: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 2,
			spaceBetween: 20,
		}
	}

});