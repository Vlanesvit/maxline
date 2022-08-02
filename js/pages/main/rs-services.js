/* ====================================
Инициализация слайдера в блоке rs-services
==================================== */
function initServicesSliders() {
	if (document.querySelector('.rs-services__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-services__slider', {
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

			// Кол-во показываемых слайдов
			slidesPerView: 5,

			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1.15,
					centeredSlides: true,
				},
				540: {
					slidesPerView: 2,
					centeredSlides: false,
				},
				768: {
					slidesPerView: 3,
					centeredSlides: false,
				},
				1140: {
					slidesPerView: 4,
					centeredSlides: false,
				},
				1450: {
					slidesPerView: 5,
					centeredSlides: false,
				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initServicesSliders();
});
