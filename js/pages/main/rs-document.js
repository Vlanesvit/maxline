/* ====================================
Инициализация слайдера в блоке rs-document
==================================== */
function initDocumentSliders() {
	if (document.querySelector('.rs-document__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-document__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 800,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			grabCursor: true,


			// Пагинация
			pagination: {
				el: '.rs-document__pagination',
				clickable: true,
			},

			// Навигация
			navigation: {
				prevEl: ".rs-document__button-prev",
				nextEl: ".rs-document__button-next",
			},

			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1.15,
					spaceBetween: 15,
					centeredSlides: true,
				},
				540: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 3,
					centeredSlides: false,
					spaceBetween: 30,
				},
				1140: {
					slidesPerView: 4,
					centeredSlides: false,
					spaceBetween: 30,
				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initDocumentSliders();
});

/* ====================================
Инициализация галереи
==================================== */
/*
data-gallery - блок галереи 
data-gallery-item - блок с картинкой
data-src - ссылка на картинку 
*/
if (document.querySelector('[data-gallery]')) {
	const galleries = document.querySelectorAll('[data-gallery]');
	if (galleries.length) {
		let galleyItems = [];
		galleries.forEach(gallery => {
			galleyItems.push({
				gallery,
				galleryClass: lightGallery(gallery, {
					plugins: [lgZoom],
					licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
					selector: '[data-gallery-item]',
					// Скорость
					speed: 800,
					// Отключить кнопку Скачать
					download: false,
					// Надпись под фото (Вывод атрибута alt у img)
					appendSubHtmlTo: false,
				})
			})
		});
	}
}