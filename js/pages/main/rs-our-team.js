/* ====================================
Инициализация слайдера в блоке rs-our-team
==================================== */
function initOurTeamSliders() {
	if (document.querySelector('.rs-our-team__slider')) {
		// Перечень слайдеров
		new Swiper('.rs-our-team__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 7000,
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
			slidesPerView: 4,
			grabCursor: true,

			// Пагинация
			pagination: {
				el: '.rs-our-team__pagination',
				clickable: true,
			},

			// Навигация
			navigation: {
				prevEl: ".rs-our-team__button-prev",
				nextEl: ".rs-our-team__button-next",
			},


			// Брейкпоинты(адаптив)
			// Шрина экрана
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 15,
					centeredSlides: true,
				},
				540: {
					slidesPerView: 2,
					centeredSlides: false,
					spaceBetween: 30,

				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 30,
					centeredSlides: false,

				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
					centeredSlides: false,

				},
				1140: {
					slidesPerView: 4,
					spaceBetween: 30,
					centeredSlides: false,

				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initOurTeamSliders();
});
