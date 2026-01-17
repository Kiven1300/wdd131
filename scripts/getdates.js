// Get current year and populate the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('current_year').textContent = currentYear;

// Get last modified date and populate it
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});

document.getElementById('LastModified').textContent = `Last Modification: ${formattedDate}`;