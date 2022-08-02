const counters = document.querySelectorAll('.num-counter');

counters.forEach(counter => {
	const counterTop = counter.getBoundingClientRect().top;

	let start = +counter.innerHTML, end = +counter.dataset.counter;

	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > counterTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval = setInterval(function () {
				counter.innerHTML = ++start;
				if (start == end) {
					clearInterval(interval);
				}
			}, 10);
		}
	});
})


