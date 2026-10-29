/* lecentre.net — interactions */

(function () {
	'use strict';

	/* Mobile navigation ---------------------------------------------------- */
	var toggle = document.querySelector('.nav-toggle');
	var nav = document.getElementById('nav-menu');

	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('is-open');
			toggle.setAttribute('aria-expanded', String(open));
			toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
		});

		// Close the menu when a link is chosen
		nav.addEventListener('click', function (event) {
			if (event.target.closest('a')) {
				nav.classList.remove('is-open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});

		// Close on Escape
		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && nav.classList.contains('is-open')) {
				nav.classList.remove('is-open');
				toggle.setAttribute('aria-expanded', 'false');
				toggle.focus();
			}
		});
	}

	/* Scroll reveal ---------------------------------------------------------- */
	var revealables = document.querySelectorAll('.reveal');

	if ('IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

		revealables.forEach(function (el) { observer.observe(el); });
	} else {
		revealables.forEach(function (el) { el.classList.add('is-visible'); });
	}
})();
