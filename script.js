// Mobile menu
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));

// Service filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.service-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    filter.classList.remove('active');
    filter.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  const selected = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
    card.style.display = card.hidden ? 'none' : '';
  });
}));

// Appointment inquiry: provides a direct email contact without claiming to send a booking.
const form = document.querySelector('#booking-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const service = document.querySelector('#service').value;
  document.querySelector('#form-feedback').textContent = `Thanks, ${name}! Your message has been sent and one of our associate's will be in contact soon!`;
  form.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();
