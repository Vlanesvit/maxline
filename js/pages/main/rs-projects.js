/* ====================================
Инициализация слайдера в блоке rs-projects
==================================== */
function initProjectsSliders() {
	if (document.querySelector('.rs-projects__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-projects__slider', {
			// Автопрокрутка
			// autoplay: {
			// 	// Пауза между прокруткой
			// 	delay: 5000,
			// 	// Закончить на последнем слайде
			// 	stopOnLastSlide: false,
			// 	// Отключить после ручного переключения
			// 	disableOnInteraction: false,
			// },

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
			slidesPerView: 2,
			spaceBetween: 30,
			grabCursor: true,


			// Пагинация
			pagination: {
				el: '.rs-projects__pagination',
				clickable: true,
			},

			// Навигация
			navigation: {
				prevEl: ".rs-projects__button-prev",
				nextEl: ".rs-projects__button-next",
			},


			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1.15,
					spaceBetween: 15,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 1.5,
					centeredSlides: false,
					spaceBetween: 30,
				},
				1140: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 30,
				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initProjectsSliders();
});
