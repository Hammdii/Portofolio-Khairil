// Navbar functionality
function toggleNavbar() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.toggle('active');
}

function closeNavbar() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.remove('active');
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
