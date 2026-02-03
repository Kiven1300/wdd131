// filtered-temples.js: Dynamic temple card generation and filtering

// Temple data array
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Rome Italy",
		location: "Rome, Italy",
		dedicated: "2019, March, 10",
		area: 41010,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
	},
	{
		templeName: "Salt Lake",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 253015,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
	},
	{
		templeName: "Tokyo Japan",
		location: "Tokyo, Japan",
		dedicated: "1980, October, 27",
		area: 53997,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-306869-wallpaper.jpg"
	}
];

// Function to create a temple card element
function createTempleCard(temple) {
	const figure = document.createElement('figure');
	figure.className = 'temple-card';

	const img = document.createElement('img');
	img.src = temple.imageUrl;
	img.alt = `${temple.templeName} Temple`;
	img.loading = 'lazy'; // Native lazy loading
	figure.appendChild(img);

	const info = document.createElement('div');
	info.className = 'temple-info';

	const name = document.createElement('h3');
	name.className = 'temple-name';
	name.textContent = temple.templeName;
	info.appendChild(name);

	const location = document.createElement('p');
	location.className = 'temple-location';
	location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
	info.appendChild(location);

	const dedication = document.createElement('p');
	dedication.className = 'temple-dedication';
	dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
	info.appendChild(dedication);

	const area = document.createElement('p');
	area.className = 'temple-area';
	area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
	info.appendChild(area);

	figure.appendChild(info);
	return figure;
}

// Function to display temples
function displayTemples(templeList) {
	const container = document.getElementById('temple-container');
	container.innerHTML = ''; // Clear existing content
	
	templeList.forEach(temple => {
		const card = createTempleCard(temple);
		container.appendChild(card);
	});
}

// Filter functions
function filterOld() {
	const oldTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(',')[0]);
		return year < 1900;
	});
	displayTemples(oldTemples);
}

function filterNew() {
	const newTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(',')[0]);
		return year > 2000;
	});
	displayTemples(newTemples);
}

function filterLarge() {
	const largeTemples = temples.filter(temple => temple.area > 90000);
	displayTemples(largeTemples);
}

function filterSmall() {
	const smallTemples = temples.filter(temple => temple.area < 10000);
	displayTemples(smallTemples);
}

function showAllTemples() {
	displayTemples(temples);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
	// Display all temples on initial load
	showAllTemples();

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

	// Navigation filter event listeners
	document.getElementById('home').addEventListener('click', (e) => {
		e.preventDefault();
		showAllTemples();
	});

	document.getElementById('old').addEventListener('click', (e) => {
		e.preventDefault();
		filterOld();
	});

	document.getElementById('new').addEventListener('click', (e) => {
		e.preventDefault();
		filterNew();
	});

	document.getElementById('large').addEventListener('click', (e) => {
		e.preventDefault();
		filterLarge();
	});

	document.getElementById('small').addEventListener('click', (e) => {
		e.preventDefault();
		filterSmall();
	});

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
