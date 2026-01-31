document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const temp = Number(document.querySelector("#temp").textContent); // °C
const wind = Number(document.querySelector("#wind").textContent); // km/h

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);
}

const windChillSpan = document.querySelector("#windchill");

if (temp <= 10 && wind > 4.8) {
  const wc = calculateWindChill(temp, wind);
  windChillSpan.textContent = wc.toFixed(1) + " °C";
} else {
  windChillSpan.textContent = "N/A";
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function(e) {
    e.stopPropagation();
    
    this.classList.toggle('expanded');
    this.classList.toggle('collapsed');
  });
});

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
