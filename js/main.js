(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
	
	const carousel = document.getElementById('carousel');
	const cards = document.querySelectorAll('.case-card');
	const prevBtn = document.getElementById('prevCase');
	const next = document.getElementById('nextCase');
	const dotsContainer = document.getElementById('carouselDots');
	
	let currentIndex = 0;
	let visibleCards = window.innerWidth < 768 ? 1 : 3;
	
	function getMaxIndex() {
	  return Math.max(0, cards.length - visibleCards);
	}
	
	function updateCarousel() {
	  const cardWidth = cards[0].offsetWidth + 20; // card + gap
	  carousel.scrollTo({
		left: currentIndex * cardWidth,
		behavior: 'smooth'
	  });
	  updateDots();
	}
	
	function updateDots() {
	  dotsContainer.innerHTML = '';
	  const totalSteps = getMaxIndex() + 1;
	  for (let i = 0; i < totalSteps; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === currentIndex) dot.classList.add('active');
	
		// 👇 Добавляем обработчик клика на точку
		dot.addEventListener('click', () => {
		  currentIndex = i;
		  updateCarousel();
		});
	
		dotsContainer.appendChild(dot);
	  }
	}
	
	// 👈 Зацикливание влево
	prevBtn.addEventListener('click', () => {
	  currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
	  updateCarousel();
	});
	
	// 👉 Зацикливание вправо
	next.addEventListener('click', () => {
	  currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
	  updateCarousel();
	});
	
	// 📱 Адаптация при ресайзе
	window.addEventListener('resize', () => {
	  visibleCards = window.innerWidth < 768 ? 1 : 3;
	  currentIndex = 0;
	  updateCarousel();
	});
	
	// 📱 Свайп на мобильных
	let startX = 0;
	let endX = 0;
	
	carousel.addEventListener('touchstart', (e) => {
	  startX = e.touches[0].clientX;
	});
	
	carousel.addEventListener('touchmove', (e) => {
	  endX = e.touches[0].clientX;
	});
	
	carousel.addEventListener('touchend', () => {
	  const delta = endX - startX;
	  if (Math.abs(delta) > 50) {
		if (delta < 0) {
		  currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
		} else {
		  currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
		}
		updateCarousel();
	  }
	});
	
	updateCarousel();	
});