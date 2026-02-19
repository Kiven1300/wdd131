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

// ===================================
// FORM VALIDATION & SUBMISSION
// ===================================

function validateForm(formData) {
  const errors = [];
  
  // Validate name
  if (formData.fullname.length < 3) {
    errors.push('Name must be at least 3 characters.');
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.push('Email address is not valid.');
  }
  
  // Validate phone (optional, but if provided must be valid)
  if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
    errors.push('Phone must be 10 digits without spaces.');
  }
  
  // Validate subject
  if (!formData.subject) {
    errors.push('You must select a subject.');
  }
  
  // Validate message
  if (formData.message.length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  
  if (formData.message.length > 500) {
    errors.push('Message cannot exceed 500 characters.');
  }
  
  // Validate date if provided (should be in the future)
  if (formData.date) {
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.push('Date must be today or in the future.');
    }
  }
  
  // Validate number of people
  if (formData.people) {
    const people = parseInt(formData.people);
    if (people < 1 || people > 100) {
      errors.push('Number of people must be between 1 and 100.');
    }
  }
  
  return errors;
}

function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const messageElement = document.getElementById('form-message');
  
  // Get form data
  const formData = {
    fullname: form.fullname.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    subject: form.subject.value,
    people: form.people.value,
    date: form.date.value,
    message: form.message.value.trim(),
    newsletter: form.newsletter.checked,
    timestamp: new Date().toISOString()
  };
  
  // Validate form
  const errors = validateForm(formData);
  
  if (errors.length > 0) {
    messageElement.innerHTML = `<strong>Errors:</strong><br>${errors.join('<br>')}`;
    messageElement.className = 'form-message error';
    messageElement.style.backgroundColor = '#ffe6e6';
    messageElement.style.color = '#8B1E1E';
    messageElement.style.padding = '1rem';
    messageElement.style.borderRadius = '8px';
    messageElement.style.marginTop = '1rem';
    return;
  }
  
  // Save to localStorage
  saveSubmission(formData);
  
  // Show success message
  messageElement.textContent = `Thank you ${formData.fullname}! Your message has been sent successfully. We'll contact you soon.`;
  messageElement.className = 'form-message success';
  messageElement.style.backgroundColor = '#e6f7e6';
  messageElement.style.color = '#0B3D2E';
  messageElement.style.padding = '1rem';
  messageElement.style.borderRadius = '8px';
  messageElement.style.marginTop = '1rem';
  
  // Reset form
  form.reset();
  
  // Update submissions display
  displaySubmissions();
  
  // Clear message after 5 seconds
  setTimeout(() => {
    messageElement.textContent = '';
    messageElement.className = 'form-message';
    messageElement.style.padding = '0';
  }, 5000);
}

// ===================================
// LOCALSTORAGE MANAGEMENT
// ===================================

function saveSubmission(formData) {
  // Get existing submissions
  const submissions = getSubmissions();
  
  // Add new submission
  submissions.push(formData);
  
  // Save back to localStorage
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
}

function getSubmissions() {
  const submissions = localStorage.getItem('contactSubmissions');
  return submissions ? JSON.parse(submissions) : [];
}

// ===================================
// DISPLAY SUBMISSIONS
// ===================================

function displaySubmissions() {
  const container = document.getElementById('submissions-container');
  
  if (!container) return;
  
  const submissions = getSubmissions();
  
  if (submissions.length === 0) {
    container.innerHTML = `<p class="empty-message">No recent messages</p>`;
    return;
  }
  
  // Clear container
  container.innerHTML = '';
  
  // Sort by timestamp (most recent first)
  const sortedSubmissions = submissions.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  
  // Display last 6 submissions
  const recentSubmissions = sortedSubmissions.slice(0, 6);
  
  recentSubmissions.forEach(submission => {
    container.appendChild(createSubmissionCard(submission));
  });
}

function createSubmissionCard(submission) {
  const card = document.createElement('div');
  card.className = 'submission-card';
  
  // Format date
  const date = new Date(submission.timestamp);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  
  // Build card content using template literals
  const subjectDisplay = getSubjectDisplay(submission.subject);
  const phoneDisplay = submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : '';
  const dateDisplay = submission.date ? `<p><strong>Requested date:</strong> ${formatDate(submission.date)}</p>` : '';
  const peopleDisplay = submission.people ? `<p><strong>People:</strong> ${submission.people}</p>` : '';
  
  card.innerHTML = `
    <div class="submission-header">
      <h3>${submission.fullname}</h3>
      <span class="submission-date">${formattedDate}</span>
    </div>
    <p><strong>Email:</strong> ${submission.email}</p>
    ${phoneDisplay}
    <p><strong>Subject:</strong> ${subjectDisplay}</p>
    ${dateDisplay}
    ${peopleDisplay}
    <p><strong>Message:</strong> ${submission.message}</p>
  `;
  
  return card;
}

function getSubjectDisplay(subject) {
  const subjects = {
    'reservacion': 'Reservation',
    'evento': 'Special Event',
    'catering': 'Catering',
    'informacion': 'More Information',
    'otro': 'Other'
  };
  return subjects[subject] || subject;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  updateFooterDates();
  initMobileMenu();
  
  // Initialize form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Display existing submissions
  displaySubmissions();
  
  // Set minimum date for date input (today)
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});
