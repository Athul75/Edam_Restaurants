const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

// Contact form handling with EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Basic validation
  const form = this;
  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'SENDING...';
  submitBtn.disabled = true;

  // Prepare template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    phone: form.user_phone.value.trim(),
    subject: subject,
    message: message,
    to_email: 'edamtaliparamba@gmail.com'
  };

  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your EmailJS service and template IDs
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Sorry, there was an error sending your message. Please try again later or contact us directly at edamtaliparamba@gmail.com');
    })
    .finally(function() {
      // Reset button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});

// Dishes Carousel Functionality
const dishesContainer = document.querySelector('.dishes__container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let cardsToShow = 3; // Default for desktop

// Function to update cards to show based on screen size
function updateCardsToShow() {
  if (window.innerWidth <= 540) {
    cardsToShow = 1;
  } else if (window.innerWidth <= 768) {
    cardsToShow = 2;
  } else {
    cardsToShow = 3;
  }
}

// Function to update carousel position
function updateCarousel() {
  const cardWidth = dishesContainer.children[0].offsetWidth;
  const translateX = -currentIndex * cardWidth;
  dishesContainer.style.transform = `translateX(${translateX}px)`;
}

// Function to move to next slide
function nextSlide() {
  const totalCards = dishesContainer.children.length;
  const maxIndex = totalCards - cardsToShow;
  
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
}

// Function to move to previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Touch/swipe functionality for mobile
let startX = 0;
let isDragging = false;

dishesContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

dishesContainer.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;
  
  if (Math.abs(diff) > 50) { // Minimum swipe distance
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    isDragging = false;
  }
});

dishesContainer.addEventListener('touchend', () => {
  isDragging = false;
});

// Update on window resize
window.addEventListener('resize', () => {
  updateCardsToShow();
  currentIndex = Math.min(currentIndex, dishesContainer.children.length - cardsToShow);
  updateCarousel();
});

// Initialize
updateCardsToShow();
updateCarousel();
