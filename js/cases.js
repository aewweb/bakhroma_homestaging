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
      title: "ЗАГОРОДНЫЙ ДОМ",
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
      • Частичная отделка: покрашенные стены, плитка в санузле. У заказчиков была частично своя мебель и декор.
      
      Процесс работы: 
      • Комплектация: выбрали необходимые материалы и мебель.
      • Полная отделка санузла с покраской стен и установкой сантехники.
      • Финальный этап: создали атмосферу уюта и комфорта.
      
      Срок выполнения: 2 месяца      
      `,
      afterText: `
      Расходы: 
      • Материалы и мебель: 539 000 руб. 
      • Работы по ремонту: 102 000 руб. 
      • Техника: 178 000 руб. 
      • Сборка: 62 000 руб. 
      • Услуги фотографа: 25 000 руб. 

      Итоговые затраты: 906 000 руб. 

      Сдача дома: 
      • Сдан в несезон со второго показа! 
      • Выше среднерыночной цены на 10%.
      • Конкуренция: несколько аналогичных объектов в районе. 
      • Наша цена на уровне рынка, но качество и оформление сделали свое дело!
      `
    },
  
    case2: {
      title: "КВАРТИРА В САНКТ-ПЕТЕРБУРГЕ",
      beforeImages: [
        "./images/case2_before1.webp",
        "./images/case2_before2.webp",
        "./images/case2_before3.webp",
        "./images/case2_before4.webp"
      ],
      afterImages: [
        "./images/case2_after1.webp",
        "./images/case2_after2.webp",
        "./images/case2_after3.webp",
        "./images/case2_after4.webp"
      ],
      beforeText: `
      Исходные данные:
      • Площадь: 43,5 м² 
      • Предчистовая отделка от застройщика 
      • Отсутствие санузла, пола и потолка 

      Процесс работы: 
      • Полная комплектация и финальная подготовка завершены за 3 месяца. 
      • Использовали качественные материалы, мебель и технику. 

      Срок выполнения: 3 месяца.      
      `,
      afterText: `
      Расходы: 
      ⦁ Материалы и мебель: 1 235 129 руб. 
      ⦁ Работы по ремонту: 807 900 руб. 
      ⦁ Доставка: 9 600 руб. 
      ⦁ Техника: 204 921 руб. 
      ⦁ Услуги фотографа: 6 500 руб. 
      
      Итоговые затраты: 2 263 050 руб. 
      
      Сдача квартиры: 
      ⦁ Сдана за 1 месяц за 85 000 руб. 
      ⦁ Конкуренция: 4 аналогичные квартиры в этом доме. 
      ⦁ Наша цена на 20% выше, чем у конкурентов, но это оправдано качеством и уникальным подходом.      
      `
    },

    case3: {
      title: "КВАРТИРА В НОВОСТРОЙКЕ",
      beforeImages: [
        "./images/case3_before1.webp",
        "./images/case3_before2.webp",
        "./images/case3_before3.webp",
        "./images/case3_before4.webp"
      ],
      afterImages: [
        "./images/case3_after1.webp",
        "./images/case3_after2.webp",
        "./images/case3_after3.webp",
        "./images/case3_after4.webp"
      ],
      beforeText: `
      Исходные данные:
      • Площадь: 36,5 м² 
      • Чистовая отделка от застройщика 
      • Санузел полностью выложен плиткой от застройщика 
      
      Процесс работы: 
      • Полная комплектация и финальная подготовка завершены за 2 месяца. 
      • Кухня изготовлена на заказ, перекрашены стены, добавлены розетки и выключатели, установлен кондиционер.
      `,
      afterText: `
      Расходы: 
      • Материалы и мебель: 1 017 772 руб. 
      • Работы по ремонту: 250 000 руб. 
      • Доставки и сборки: 70 425 руб. 
      • Техника: 155 100 руб. 
      
      Итоговые затраты: 1 493 297 руб. 
      Сдается на 15% выше чем конкуренты.
      Конкуренция очень высока.
      `
    },
    
    case4: {
      title: "ОФИС В МОСКВЕ",
      beforeImages: [
        "./images/case4_before1.webp",
        "./images/case4_before2.webp",
        "./images/case4_before3.webp",
        "./images/case4_before4.webp"
      ],
      afterImages: [
        "./images/case4_after1.webp",
        "./images/case4_after2.webp",
        "./images/case4_after3.webp",
        "./images/case4_after4.webp"
      ],
      beforeText: `
      Бюджет - минимальный. Расходы собственника составили 12 800 руб. на краску и работу по перекраске. 
      
      Картина — работа художника нашего Бюро, холст и работа стоили 9 000 руб. Размер 100х120 см.
      `,
      afterText: `
      Остальной декор использовался уже имеющийся в офисе, а также со склада Бюро клиент взял в аренду ковры, растения, вазы, рамки, книги-муляжи, светильник и плед. 
      Просмотры увеличились в 3 раза.
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