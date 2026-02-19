# Flavors of Mexico - WDD131 Final Project

A dynamic and responsive website about traditional Mexican cuisine that demonstrates mastery of HTML, CSS, and JavaScript.

## 🌮 Project Description

Flavors of Mexico is an educational website dedicated to preserving and sharing the rich Mexican culinary tradition. The site features traditional dishes such as tacos, tamales, mole, and pozole, with detailed information about ingredients, origins, and cultural context.

## 📋 Completed Project Requirements

### Structure and Content
✅ **3+ pages with consistent navigation**: index.html, dishes.html, contact.html, references.html  
✅ **Relevant and complete content**: Detailed information about 12 traditional Mexican dishes  
✅ **Appropriate visual theme**: Colors inspired by the Mexican flag and cultural elements  
✅ **Valid and semantic HTML**: Organized structure with appropriate semantic elements  
✅ **Valid and optimized CSS**: Without duplicate declarations or unused properties  

### Responsive Design
✅ **Mobile-first design**: Responsive for mobile (portrait and landscape) and large screens  
✅ **PARC Principles**: Proximity, Alignment, Repetition, and Contrast applied consistently  
✅ **Optimized images**: Use of optimized Unsplash URLs  
✅ **Lazy loading**: Implemented with Intersection Observer API  

### HTML Form
✅ **Complete form** in contact.html with:
- Text, email, phone, select, number, date, and textarea fields
- HTML5 validation (required, minlength, maxlength, pattern)
- Additional JavaScript validation
- Visual error and success feedback

### JavaScript Functionality

#### ✅ Multiple functions implemented:
- `updateFooterDates()` - Updates year and last modification date
- `initMobileMenu()` - Responsive hamburger menu
- `createDishCard()` - Generates dish cards dynamically
- `toggleFavorite()` - Favorites management
- `displayDishes()` - Renders dishes with filters
- `validateForm()` - Form validation
- `handleFormSubmit()` - Submission processing
- `animateCounter()` - Counter animation
- `incrementVisitorCount()` - Visit counter
- And more...

#### ✅ DOM Interaction:
- Element selection with `querySelector`, `getElementById`
- Content modification with `innerHTML`, `textContent`
- Class manipulation with `classList`
- Event listeners on buttons, forms, and navigation

#### ✅ Conditional branching:
- Form validation with multiple conditions
- Dish filtering by category
- Favorites verification
- Error handling

#### ✅ Arrays and methods:
- `dishes` array with 12 dish objects
- `.forEach()` for rendering elements
- `.filter()` for filtering by category and favorites
- `.map()` and `.includes()` for checking favorites
- `.sort()` for sorting submissions by date
- `.slice()` for limiting results

#### ✅ Template literals exclusively:
- All HTML strings use template literals
- Variable interpolation with `${}`
- Multiline strings for complex HTML

#### ✅ localStorage:
- **Favorites**: Persistence of favorite dishes
- **Visitor counter**: Visit tracking
- **Newsletter**: Subscriber list
- **Contact form**: Submission storage
- Use of `JSON.stringify()` and `JSON.parse()`

### Additional Features
✅ **Advanced lazy loading**: Intersection Observer for progressive image loading  
✅ **Filter system**: Dynamic dish filtering by category  
✅ **Favorites system**: Persistent with localStorage  
✅ **CSS animations**: Smooth transitions and hover effects  
✅ **Accessibility**: Labels, ARIA attributes, focus states  
✅ **SEO**: Descriptive meta tags on all pages  

## 📁 Project Structure

```
project/
├── index.html              # Main page
├── dishes.html             # Dish gallery with filters
├── contact.html            # Contact form
├── references.html         # References and credits
├── siteplan.html          # Original site plan
├── siteplan.css           # Site plan styles
├── images/                # Folder for local images
├── styles/
│   └── main.css           # Main responsive stylesheet
└── scripts/
    ├── main.js            # JavaScript for index.html
    ├── dishes.js          # JavaScript for dishes.html
    └── contact.js         # JavaScript for contact.html
```

## 🎨 Color Scheme

- **Agave Green** (#0B3D2E): Primary color for headers
- **Flag Red** (#8B1E1E): Accent color for buttons and calls to action
- **Agave Cream** (#F7F1E3): Main background and content panels

## 🔤 Typography

- **Merriweather Bold**: For headers and titles
- **Inter Regular/Semibold**: For body text and navigation

## 🚀 Technical Features

### Modern JavaScript
- ES6+ features
- Arrow functions
- Destructuring
- Template literals
- Async operations

### Advanced CSS
- CSS Grid and Flexbox
- CSS Variables (Custom Properties)
- Media queries for responsiveness
- Animations and transitions
- Mobile-first approach

### Best Practices
- Clean and commented code
- Reusable functions
- Separation of concerns
- Progressive enhancement
- Graceful degradation

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🌐 Pages and Features

### 1. Home (index.html)
- Hero banner with call to action
- Featured dishes (first 3)
- "About Us" section with animated statistics
- Visitor counter (localStorage)
- Newsletter form

### 2. Dishes (dishes.html)
- Complete gallery of 12 traditional dishes
- Filter system by category (Appetizers, Main Courses, Soups, Desserts)
- Favorites system with persistence
- Image lazy loading
- User favorites section

### 3. Contact (contact.html)
- Complete form with validation
- Fields: name, email, phone, subject, number of people, date, message
- Real-time validation
- Submission storage in localStorage
- Display of recent messages
- Contact information

### 4. References (references.html)
- Content and image credits
- Links to sources
- Legal note about educational use

## 🎯 Completed Learning Objectives

1. ✅ Semantic and valid HTML
2. ✅ Modern and responsive CSS
3. ✅ Functional JavaScript with DOM manipulation
4. ✅ localStorage for data persistence
5. ✅ Forms with validation
6. ✅ Image lazy loading
7. ✅ Mobile-first design
8. ✅ Web accessibility
9. ✅ Code organization
10. ✅ Web development best practices

## 📝 Development Notes

- Images use optimized Unsplash URLs
- Lazy loading implemented with native Intersection Observer API
- No external frameworks or libraries (vanilla JS)
- All code is original and developed from scratch
- Compatible with modern browsers

## 👨‍💻 Author

Kevin González Álvarez  
Course WDD131 - Final Project  
Date: February 2026

## 📄 License

Educational project developed for the WDD131 course.  
All image and content credits are listed in references.html.

