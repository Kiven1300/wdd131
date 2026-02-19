// ===================================
// DATA - Array of Mexican Dishes
// ===================================

const dishes = [
  {
    id: 1,
    name: 'Tacos al Pastor',
    category: 'antojitos',
    description: 'Marinated pork tacos with spices, pineapple, and cilantro. One of Mexico\'s most iconic dishes.',
    ingredients: 'pork, pineapple, cilantro, onion, achiote',
    image: 'images/tacos_al_pastor.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop',
    origin: 'Mexico City'
  },
  {
    id: 2,
    name: 'Mole Poblano',
    category: 'principales',
    description: 'Complex sauce with over 20 ingredients including chiles and chocolate, served over chicken.',
    ingredients: 'mulato chile, chocolate, almonds, sesame, spices',
    image: 'images/mole-poblano.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=600&h=400&fit=crop',
    origin: 'Puebla'
  },
  {
    id: 3,
    name: 'Pozole',
    category: 'sopas',
    description: 'Traditional cacahuazintle corn broth with pork, accompanied by lettuce, radish, and tostadas.',
    ingredients: 'cacahuazintle corn, pork, guajillo chile, lettuce, radish',
    image: 'images/Pozole.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop',
    origin: 'Guerrero'
  },
  {
    id: 4,
    name: 'Torta de Tamal',
    category: 'antojitos',
    description: 'Bolillo stuffed with a tamal, a popular street food in Mexico City known as “guajolota”.',
    ingredients: 'bolillo, tamal, salsa, crema (optional)',
    image: 'images/torta_de_tamal.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1564767655658-4e6b365884ff?w=600&h=400&fit=crop',
    origin: 'All of Mexico'
  },
  {
    id: 5,
    name: 'Chiles en Nogada',
    category: 'principales',
    description: 'Poblano chile stuffed with picadillo, topped with walnut sauce and pomegranate. Represents the flag colors.',
    ingredients: 'poblano chile, picadillo, walnut, pomegranate, parsley',
    image: 'images/chiles-nogada.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1599974555092-82a98b144c99?w=600&h=400&fit=crop',
    origin: 'Puebla'
  },
  {
    id: 6,
    name: 'Enchiladas',
    category: 'antojitos',
    description: 'Corn tortillas bathed in chile sauce, filled with chicken, cheese, or beans.',
    ingredients: 'corn tortillas, chile sauce, cheese, cream, chicken',
    image: 'images/enchiladas.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&h=400&fit=crop',
    origin: 'All of Mexico'
  },
  {
    id: 7,
    name: 'Ceviche',
    category: 'principales',
    description: 'Fish or seafood marinated in lime juice with tomato, onion, cilantro, and chile.',
    ingredients: 'fresh fish, lime, tomato, onion, cilantro, chile',
    image: 'images/ceviche.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&h=400&fit=crop',
    origin: 'Mexican Coasts'
  },
  {
    id: 8,
    name: 'Churros',
    category: 'postres',
    description: 'Fried dough sprinkled with sugar and cinnamon, perfect with hot chocolate.',
    ingredients: 'flour, water, sugar, cinnamon, frying oil',
    image: 'images/churros.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1590948036047-571a6b1223a0?w=600&h=400&fit=crop',
    origin: 'Imported from Spain, adapted in Mexico'
  }
];

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Update footer dates
function updateFooterDates() {
  const currentYearElement = document.getElementById('currentYear');
  const lastModifiedElement = document.getElementById('lastModified');
  
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// Increment visitor count in localStorage
function incrementVisitorCount() {
  let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
  visitorCount++;
  localStorage.setItem('visitorCount', visitorCount.toString());
  return visitorCount;
}

// Animate counter
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Create dish card with lazy loading
function createDishCard(dish, isLazy = true) {
  const card = document.createElement('div');
  card.className = 'dish-card';
  
  const imageElement = isLazy 
    ? `<img src="https://via.placeholder.com/600x400?text=Loading..." data-src="${dish.image}" data-fallback="${dish.imageFallback || dish.image}" alt="${dish.name}" class="dish-image" loading="lazy">`
    : `<img src="${dish.image}" alt="${dish.name}" class="dish-image" onerror="this.src='${dish.imageFallback || dish.image}'">`;
  
  card.innerHTML = `
    ${imageElement}
    <div class="dish-content">
      <div class="dish-header">
        <h3>${dish.name}</h3>
        <button class="favorite-btn" data-dish-id="${dish.id}" aria-label="Add to favorites">
          ${isFavorite(dish.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <span class="category-badge">${getCategoryName(dish.category)}</span>
      <p class="dish-description">${dish.description}</p>
      <p class="dish-ingredients"><strong>Ingredients:</strong> ${dish.ingredients}</p>
    </div>
  `;
  
  // Lazy loading implementation with fallback
  if (isLazy) {
    const img = card.querySelector('.dish-image');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          // Add error handler for fallback
          image.onerror = () => {
            image.src = image.dataset.fallback;
          };
          observer.unobserve(image);
        }
      });
    });
    observer.observe(img);
  }
  
  // Add favorite button listener
  const favoriteBtn = card.querySelector('.favorite-btn');
  favoriteBtn.addEventListener('click', () => toggleFavorite(dish.id));
  
  return card;
}

// Get category display name
function getCategoryName(category) {
  const categories = {
    'antojitos': 'Appetizers',
    'principales': 'Main Course',
    'sopas': 'Soups',
    'postres': 'Desserts'
  };
  return categories[category] || category;
}

// ===================================
// FAVORITES MANAGEMENT (localStorage)
// ===================================

function getFavorites() {
  const favorites = localStorage.getItem('favoriteDishes');
  return favorites ? JSON.parse(favorites) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('favoriteDishes', JSON.stringify(favorites));
}

function isFavorite(dishId) {
  const favorites = getFavorites();
  return favorites.includes(dishId);
}

function toggleFavorite(dishId) {
  let favorites = getFavorites();
  
  if (favorites.includes(dishId)) {
    // Remove from favorites
    favorites = favorites.filter(id => id !== dishId);
  } else {
    // Add to favorites
    favorites.push(dishId);
  }
  
  saveFavorites(favorites);
  
  // Update all favorite buttons for this dish
  const buttons = document.querySelectorAll(`[data-dish-id="${dishId}"]`);
  buttons.forEach(btn => {
    btn.textContent = isFavorite(dishId) ? '❤️' : '🤍';
  });
  
  // Update favorites section if exists
  updateFavoritesDisplay();
}

// ===================================
// HOME PAGE SPECIFIC
// ===================================

function initHomePage() {
  // Load featured dishes (first 3)
  const featuredContainer = document.getElementById('featured-dishes-container');
  if (featuredContainer) {
    const featuredDishes = dishes.slice(0, 3);
    featuredDishes.forEach(dish => {
      featuredContainer.appendChild(createDishCard(dish));
    });
  }
  
  // Update dishes count with animation
  const dishesCountElement = document.getElementById('dishes-count');
  if (dishesCountElement) {
    animateCounter(dishesCountElement, dishes.length);
  }
  
  // Update visitor count
  const visitorsCountElement = document.getElementById('visitors-count');
  if (visitorsCountElement) {
    const count = incrementVisitorCount();
    animateCounter(visitorsCountElement, count);
  }
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('newsletter-email');
  const messageElement = document.getElementById('newsletter-message');
  const email = emailInput.value;
  
  // Save to localStorage
  const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
  
  if (subscribers.includes(email)) {
    messageElement.textContent = 'This email is already subscribed.';
    messageElement.className = 'form-message error';
  } else {
    subscribers.push(email);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
    messageElement.textContent = 'Thank you for subscribing!';
    messageElement.className = 'form-message success';
    emailInput.value = '';
  }
  
  setTimeout(() => {
    messageElement.textContent = '';
    messageElement.className = 'form-message';
  }, 3000);
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  updateFooterDates();
  initMobileMenu();
  
  // Check which page we're on and initialize accordingly
  const path = window.location.pathname;
  
  if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/project/')) {
    initHomePage();
  }
});
