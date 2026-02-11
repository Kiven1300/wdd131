const countElement = document.querySelector("#review-count");
const currentCount = Number(localStorage.getItem("reviewCount")) || 0;
const newCount = currentCount + 1;
localStorage.setItem("reviewCount", newCount.toString());
countElement.textContent = newCount.toString();
