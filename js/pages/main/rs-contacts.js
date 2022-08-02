/* ====================================
Загрузка карты
==================================== */
function loadContentWithScroll() {
	const windowHeight = document.documentElement.clientHeight;
	const lazyMap = document.querySelector("._load-map");

	window.addEventListener("scroll", lazyScroll);
	window.addEventListener("load", lazyScroll);

	function lazyScroll() {
		if (!lazyMap.classList.contains('_loaded')) {
			getMap();
		}
	}

	// Встаивание карты
	function getMap() {
		const lazyMapPositions = lazyMap.getBoundingClientRect().top + pageYOffset;
		if (pageYOffset > lazyMapPositions - windowHeight) {
			const loadMapUrl = lazyMap.dataset.map;

			if (loadMapUrl) {
				lazyMap.insertAdjacentHTML(
					"beforeend",
					`<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy frameborder="1" allowfullscreen="true" style="position:relative;""></iframe>`
				);
				lazyMap.classList.add('_loaded');
			}
		}
	}
}
if (document.querySelector("._load-map")) {
	loadContentWithScroll()
}

/* ====================================
Открытие\скрытие блока с контактами
==================================== */
function hideContact() {
	const contactsNote = document.querySelector(".rs-contacts__map_note");
	const contactsNoteClose = document.querySelector(".rs-contacts__close");

	contactsNoteClose.addEventListener('click', function () {
		contactsNote.classList.toggle('_contacts-show');
		contactsNoteClose.classList.toggle('_contacts-active');
	})
}
if (document.querySelector(".rs-contacts__map_note") && document.querySelector(".rs-contacts__close")) {
	hideContact()
}