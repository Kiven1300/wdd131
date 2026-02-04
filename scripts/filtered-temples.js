const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/RomeTempleatNight.jpg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Paris_France_Temple_Exterior.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/St._George_Southeast_View_with_Garden.jpg"
    }
];

const templeCards = document.querySelector('#temple-cards');
const pageTitle = document.querySelector('#page-title');

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

function updateCopyrightYear() {
    const currentYearElement = document.getElementById('current_year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
}

function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('LastModified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const formattedDate = lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
    }
}

function getDedicatedYear(dedicated) {
    return Number.parseInt(dedicated.split(',')[0], 10);
}

function buildDetail(label, value) {
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = `${label}: `;
    p.appendChild(span);
    p.append(value);
    return p;
}

function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.className = 'temple-card';

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = 'lazy';

    const caption = document.createElement('figcaption');
    caption.textContent = temple.templeName;

    const details = document.createElement('div');
    details.className = 'temple-details';
    details.appendChild(buildDetail('Location', temple.location));
    details.appendChild(buildDetail('Dedicated', temple.dedicated));
    details.appendChild(buildDetail('Area', `${temple.area.toLocaleString()} sq ft`));

    card.appendChild(img);
    card.appendChild(caption);
    card.appendChild(details);

    return card;
}

function displayTemples(templeList) {
    templeCards.innerHTML = '';
    templeList.forEach((temple) => {
        templeCards.appendChild(createTempleCard(temple));
    });
}

function filterTemples(filter) {
    let filtered = temples;

    switch (filter) {
        case 'old':
            filtered = temples.filter((temple) => getDedicatedYear(temple.dedicated) < 1900);
            break;
        case 'new':
            filtered = temples.filter((temple) => getDedicatedYear(temple.dedicated) > 2000);
            break;
        case 'large':
            filtered = temples.filter((temple) => temple.area > 90000);
            break;
        case 'small':
            filtered = temples.filter((temple) => temple.area < 10000);
            break;
        default:
            filtered = temples;
            break;
    }

    pageTitle.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
    displayTemples(filtered);
}

function initFiltering() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = link.dataset.filter || 'home';
            filterTemples(filter);

            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    filterTemples('home');
}

function init() {
    initHamburgerMenu();
    initFiltering();
    updateCopyrightYear();
    updateLastModifiedDate();
}

document.addEventListener('DOMContentLoaded', init);
