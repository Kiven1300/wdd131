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
    imageFallback: 'images/torta_de_tamal.jpg',
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
  },
  {
    id: 9,
    name: 'Quesadillas',
    category: 'antojitos',
    description: 'Folded tortilla with melted cheese and other ingredients, cooked on a griddle.',
    ingredients: 'corn tortilla, Oaxaca cheese, mushrooms or squash blossoms',
    image: 'images/quesadillas.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=400&fit=crop',
    origin: 'All of Mexico'
  },
  {
    id: 10,
    name: 'Sopa de Tortilla',
    category: 'sopas',
    description: 'Tomato broth with fried tortilla strips, avocado, cheese, and cream.',
    ingredients: 'tomato, tortilla, avocado, cheese, pasilla chile, cream',
    image: 'images/sopa-tortilla.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop',
    origin: 'Mexico City'
  },
  {
    id: 11,
    name: 'Flan Napolitano',
    category: 'postres',
    description: 'Creamy egg and condensed milk dessert with caramel.',
    ingredients: 'condensed milk, evaporated milk, eggs, vanilla, sugar',
    image: 'images/flan.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1611057005896-82ffdcdfd570?w=600&h=400&fit=crop',
    origin: 'Adapted in Mexico'
  },
  {
    id: 12,
    name: 'Cochinita Pibil',
    category: 'principales',
    description: 'Pork marinated in achiote and orange juice, slow-cooked.',
    ingredients: 'pork, achiote, sour orange, purple onion, habanero',
    image: 'images/cochinita_pibil.jpg',
    imageFallback: 'images/cochinita_pibil.jpg',
    origin: 'Yucatán'
  }
];

// ===================================
// UTILITY FUNCTIONS
// ===================================

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

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

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
    favorites = favorites.filter(id => id !== dishId);
  } else {
    favorites.push(dishId);
  }
  
  saveFavorites(favorites);
  
  // Update all favorite buttons for this dish
  const buttons = document.querySelectorAll(`[data-dish-id="${dishId}"]`);
  buttons.forEach(btn => {
    btn.textContent = isFavorite(dishId) ? '❤️' : '🤍';
  });
  
  // Update favorites display
  updateFavoritesDisplay();
}

// ===================================
// DISH CARD CREATION
// ===================================

function createDishCard(dish, isLazy = true) {
  const card = document.createElement('div');
  card.className = 'dish-card';
  card.dataset.category = dish.category;
  
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
      <p class="dish-origin" style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;"><strong>Origin:</strong> ${dish.origin}</p>
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

// ===================================
// DISPLAY ALL DISHES
// ===================================

function displayDishes(dishesToShow = dishes) {
  const container = document.getElementById('all-dishes-container');
  const noResultsElement = document.getElementById('no-results');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  if (dishesToShow.length === 0) {
    if (noResultsElement) {
      noResultsElement.style.display = 'block';
    }
    return;
  }
  
  if (noResultsElement) {
    noResultsElement.style.display = 'none';
  }
  
  dishesToShow.forEach(dish => {
    container.appendChild(createDishCard(dish));
  });
}

// ===================================
// FILTER FUNCTIONALITY
// ===================================

function initFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filterValue = button.dataset.filter;
      
      // Filter dishes
      let filteredDishes;
      if (filterValue === 'all') {
        filteredDishes = dishes;
      } else {
        filteredDishes = dishes.filter(dish => dish.category === filterValue);
      }
      
      // Display filtered dishes
      displayDishes(filteredDishes);
    });
  });
}

// ===================================
// FAVORITES DISPLAY
// ===================================

function updateFavoritesDisplay() {
  const favoritesContainer = document.getElementById('favorites-container');
  
  if (!favoritesContainer) return;
  
  const favoriteIds = getFavorites();
  
  if (favoriteIds.length === 0) {
    favoritesContainer.innerHTML = `<p class="empty-message">You haven't added any dishes to favorites yet. Click the heart ❤️ on any dish to save it.</p>`;
    return;
  }
  
  favoritesContainer.innerHTML = '';
  
  const favoriteDishes = dishes.filter(dish => favoriteIds.includes(dish.id));
  
  favoriteDishes.forEach(dish => {
    favoritesContainer.appendChild(createDishCard(dish));
  });
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  updateFooterDates();
  initMobileMenu();
  
  // Display all dishes
  displayDishes();
  
  // Initialize filter buttons
  initFilterButtons();
  
  // Display favorites
  updateFavoritesDisplay();
});
