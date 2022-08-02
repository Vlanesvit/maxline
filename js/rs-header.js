/* ====================================
Мобильное меню
==================================== */
const burger = () => {
	const mobileMenu = document.querySelectorAll('.menu');
	const menuMainList = document.querySelectorAll('.menu__list > .dropdown > i');
	const menuSubList = document.querySelectorAll('.dropdown-menu > .dropdown > i');
	const menuMainItem = document.querySelectorAll('.menu__list > .dropdown');
	const menuSubItem = document.querySelectorAll('.dropdown-menu > .dropdown');
	const menuItems = [...menuMainItem, ...menuSubItem];

	function closeMenuDesk() {
		if (window.innerWidth > 992) {
			menuItems.forEach(item => {
				item.addEventListener('click', function (event) {
					event.stopPropagation();
				});

				document.addEventListener('click', function (e) {
					item.classList.remove('_open');
				});
			});
		}
	}
	closeMenuDesk()
	window.addEventListener('resize', closeMenuDesk)

	mobileMenu.forEach(menu => {
		const burgerBtn = menu.querySelector('.menu__icon');
		const burgerMenuBody = menu.querySelector('.menu__body');

		if (burgerBtn) {
			burgerBtn.addEventListener('click', function () {

				// Закрытие подменю при клинке на бургер
				for (let i = 0; i < menuItems.length; i++) {
					if (menuItems[i].classList.contains('_open')) {
						menuItems[i].classList.remove('_open');
					}
				}

				// Показать меню
				burgerBtn.classList.toggle('_icon-open');
				burgerMenuBody.classList.toggle('_menu-active');
			});
		}
	});

	// Открытие только одного из выпадающих списков (submenu)
	menuSubList.forEach(menuSubBtn => {
		menuSubBtn.addEventListener('click', (e) => {
			menuSubList.forEach((subBtn) => {
				if (menuSubBtn === subBtn) {
					subBtn.closest('.dropdown').classList.toggle('_open');
				} else {
					subBtn.closest('.dropdown').classList.remove('_open');
				}
			});
		});
	});

	// Открытие только одного из выпадающих списков (mainmenu)
	menuMainList.forEach(menuMainBtn => {
		menuMainBtn.addEventListener('click', (e) => {
			menuMainList.forEach((mainBtn) => {
				if (menuMainBtn === mainBtn) {
					mainBtn.closest('.dropdown').classList.toggle('_open');

					for (let i = 0; i < menuSubItem.length; i++) {
						menuSubItem[i].classList.remove('_open')
					}
				} else {
					mainBtn.closest('.dropdown').classList.remove('_open');
				}
			});
		});
	});
}
if (document.querySelectorAll('.menu')) {
	burger()
}

/* ====================================
Табы контактов в мобильной версии
==================================== */
const tabСontactMob = () => {
	const contactBlock = document.querySelectorAll('.contact');

	contactBlock.forEach(contact => {
		// Кнопка
		const tabsHandlesElems = contact.querySelectorAll('.rs-header [data-tabs-handler]');
		// Контент
		const tabsContentElems = contact.querySelectorAll('.rs-header [data-tabs-field]');

		for (const tabElem of tabsHandlesElems) {
			tabElem.addEventListener('click', () => {
				// Удаление у всех кнопок активного класса
				tabsHandlesElems.forEach((tabItem) => {
					tabItem.classList.remove('_tab-active');
				});

				// Активный класс нажатой кнопке
				tabElem.classList.add('_tab-active');

				// Сравнение значения дата-атрибутов и переключение, если значения схожи
				tabsContentElems.forEach((tabContent) => {
					if (tabContent.dataset.tabsField === tabElem.dataset.tabsHandler) {
						tabContent.classList.add('_content-active');
					} else {
						tabContent.classList.remove('_content-active');
					}
				});
			});
		}
	});

}
if (document.querySelectorAll('.contact [data-tabs-handler]') && document.querySelectorAll('.contact [data-tabs-field]')) {
	tabСontactMob()
}

/* ====================================
Шапка при скролле
==================================== */
const onFixedHead = () => {
	const header = document.querySelector('.rs-header');

	function fixBotHead() {
		const topheader = header.querySelector('.rs-header__top').scrollHeight;
		header.classList.toggle('_menu-fixed', window.scrollY > topheader);
	}

	window.addEventListener('scroll', function () {
		fixBotHead()
	})
	window.addEventListener('load', function () {
		fixBotHead()
	})
	window.addEventListener('resize', function () {
		fixBotHead()
	})
}
if (document.querySelector('.rs-header')) {
	onFixedHead()
}



/* ====================================
Якорный скролл к блоку
==================================== */
function smoothScroll() {
	const smoothLink = document.querySelectorAll('.smooth-link > a');
	smoothLink.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const IdBlock = e.target.getAttribute('href').substr(1);
			document.getElementById(IdBlock).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});
}
if (document.querySelector('.smooth-link > a')) {
	smoothScroll()
}

function headerNavigation() {
	const contentBlocks = document.querySelectorAll('.smooth-block');
	const sidebarLinks = document.querySelectorAll('.smooth-link');

	/* ====================================
	Поместить ссылку при скролле к блоку
	==================================== */
	function markLink() {
		contentBlocks.forEach(block => {
			let top = window.scrollY;
			let offset = block.offsetTop - 300;
			let heightBlock = block.offsetHeight;
			let IdBlock = block.getAttribute('id');

			if (top >= offset && top < offset + heightBlock) {
				sidebarLinks.forEach(link => {
					link.classList.remove('current_menu_item');
					document.querySelector('.smooth-link > a[href*=' + IdBlock + ']').closest('.smooth-link').classList.add('current_menu_item');
				});
			} else {
				sidebarLinks.forEach(link => {
					document.querySelector('.smooth-link > a[href*=' + IdBlock + ']').closest('.smooth-link').classList.remove('current_menu_item');
				});
			}
		});
	}
	window.addEventListener('scroll', markLink)
	window.addEventListener('load', markLink)
}
if (document.querySelector('.smooth-link') && document.querySelector('.smooth-block')) {
	headerNavigation()
}


