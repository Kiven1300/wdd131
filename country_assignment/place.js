// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Static values from the page (must match what you display)
const temp = Number(document.querySelector("#temp").textContent); // °C
const wind = Number(document.querySelector("#wind").textContent); // km/h

// One-line return function (metric)
// Formula commonly used for Canada (valid for T<=10°C and v>4.8 km/h)
function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);
}

// Only calculate if conditions are met
const windChillSpan = document.querySelector("#windchill");

if (temp <= 10 && wind > 4.8) {
  const wc = calculateWindChill(temp, wind);
  windChillSpan.textContent = wc.toFixed(1) + " °C";
} else {
  windChillSpan.textContent = "N/A";
}

// ===== INTERACTIVE GESTURES =====

// 1. CLICK GESTURE: Expand/Collapse cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function(e) {
    e.stopPropagation();
    
    // Toggle expanded state
    this.classList.toggle('expanded');
    this.classList.toggle('collapsed');
  });
});

// 2. HOVER GESTURE: Already handled in CSS with transform and shadow
// .card:hover { transform: translateY(-5px); box-shadow: ... }

// 3. SCROLL ANIMATION: Fade in on scroll
function revealCardsOnScroll() {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.85) {
      card.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', revealCardsOnScroll);
window.addEventListener('load', revealCardsOnScroll);
