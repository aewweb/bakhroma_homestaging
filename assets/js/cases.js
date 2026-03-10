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

	document.querySelectorAll('.faq-question').forEach(button => {
		button.addEventListener('click', () => {
		  const item = button.closest('.faq-item');
		  item.classList.toggle('active');
		});
	  });
  });

  const casesData = {
    case1: {
      title: "КЕЙС: ЗАГОРОДНЫЙ ДОМ",
      beforeImages: [
        "./images/case1_before1.webp",
        "./images/case1_before2.webp",
        "./images/case1_before3.webp",
        "./images/case1_before4.webp"
      ],
      afterImages: [
        "./images/case1_after1.webp",
        "./images/case1_after2.webp",
        "./images/case1_after3.webp",
        "./images/case1_after4.webp"
      ],
      beforeText: `
      Исходные данные:
      • Площадь: 119 м²
      • Частичная отделка
      • Часть мебели была своя
      • Дом без уюта и стилистики
      `,
      afterText: `
      Результат:
      • Продан со второго показа
      • Цена выше рынка
      • Полная комплектация
      • Уютная атмосфера
      `
    },
  
    case2: {
      title: "КЕЙС: КВАРТИРА В САНКТ-ПЕТЕРБУРГЕ",
      beforeImages: [
        "./images/case1_before1.webp",
        "./images/case1_before2.webp",
        "./images/case1_before3.webp",
        "./images/case1_before4.webp"
      ],
      afterImages: [
        "./images/case1_after1.webp",
        "./images/case1_after2.webp",
        "./images/case1_after3.webp",
        "./images/case1_after4.webp"
      ],
      beforeText: `
      Исходные данные:
      • Площадь: 119 м²
      • Частичная отделка
      • Часть мебели была своя
      • Дом без уюта и стилистики
      `,
      afterText: `
      Результат:
      • Продан со второго показа
      • Цена выше рынка
      • Полная комплектация
      • Уютная атмосфера
      `
    },

    case3: {
      title: "КЕЙС: КВАРТИРА В НОВОСТРОЙКЕ",
      beforeImages: [
        "./images/case1_before1.webp",
        "./images/case1_before2.webp",
        "./images/case1_before3.webp",
        "./images/case1_before4.webp"
      ],
      afterImages: [
        "./images/case1_after1.webp",
        "./images/case1_after2.webp",
        "./images/case1_after3.webp",
        "./images/case1_after4.webp"
      ],
      beforeText: `
      Исходные данные:
      • Площадь: 119 м²
      • Частичная отделка
      • Часть мебели была своя
      • Дом без уюта и стилистики
      `,
      afterText: `
      Результат:
      • Продан со второго показа
      • Цена выше рынка
      • Полная комплектация
      • Уютная атмосфера
      `
    },
    
    case4: {
      title: "КЕЙС: ОФИС В МОСКВЕ",
      beforeImages: [
        "./images/case1_before1.webp",
        "./images/case1_before2.webp",
        "./images/case1_before3.webp",
        "./images/case1_before4.webp"
      ],
      afterImages: [
        "./images/case1_after1.webp",
        "./images/case1_after2.webp",
        "./images/case1_after3.webp",
        "./images/case1_after4.webp"
      ],
      beforeText: `
      Исходные данные:
      • Площадь: 119 м²
      • Частичная отделка
      • Часть мебели была своя
      • Дом без уюта и стилистики
      `,
      afterText: `
      Результат:
      • Продан со второго показа
      • Цена выше рынка
      • Полная комплектация
      • Уютная атмосфера
      `
    },
  };
  
  const details = document.getElementById("case-details");
  
  document.querySelectorAll(".case-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
  
      const key = btn.dataset.case;
      const data = casesData[key];
      if (!data) return;
  
      details.classList.remove("hidden");
      details.querySelector(".case-title").textContent = data.title;
  
      const before = details.querySelector(".before");
      const after = details.querySelector(".after");
  
      before.innerHTML = data.beforeImages.map(img => `<img src="${img}" alt="">`).join("");
      after.innerHTML = data.afterImages.map(img => `<img src="${img}" alt="">`).join("");
  
      details.querySelector(".before-text").textContent = data.beforeText;
      details.querySelector(".after-text").textContent = data.afterText;
  
      details.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });