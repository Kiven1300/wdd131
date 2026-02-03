// temples.js: hamburger toggle + footer dates

document.addEventListener('DOMContentLoaded', () => {
	// Hamburger toggle
	const toggleBtn = document.getElementById('hamburger');
	const nav = document.querySelector('.site-nav');

	if (toggleBtn && nav) {
		toggleBtn.addEventListener('click', () => {
			const isOpen = nav.classList.toggle('open');
			toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			toggleBtn.textContent = isOpen ? '✕' : '☰';
		});
	}

	// Footer year
	const yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	// Footer last modified
	const lastModEl = document.getElementById('last-modified');
	if (lastModEl) {
		const lm = new Date(document.lastModified);
		lastModEl.textContent = `Last Modification: ${lm.toLocaleString()}`;
	}
});
