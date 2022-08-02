/* ====================================
Инициализация слайдера в блоке rs-slider
==================================== */
function initMainSliders() {
	if (document.querySelector('.rs-slider__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-slider__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 10000,
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
			speed: 300,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			navigation: {
				nextEl: '.rs-slider__button-next',
				prevEl: '.rs-slider__button-prev',
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initMainSliders();
});
