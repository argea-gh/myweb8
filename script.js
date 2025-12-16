// script.js

// ========================
// 1. Hero Slider Otomatis
// ========================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

// Klik dot
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'));
    showSlide(slideIndex);
  });
});

// Auto slide (setiap 5 detik)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ========================
// 2. Mobile Menu Toggle
// ========================
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  
  // Toggle animasi hamburger
  const spans = menuToggle.querySelectorAll('span');
  if (mobileMenu.style.display === 'block') {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'rotate(0)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'rotate(0)';
  }
});

// Sembunyikan mobile menu saat klik link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(0)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'rotate(0)';
  });
});

// ========================
// 3. FAQ Accordion
// ========================
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.maxHeight;

    // Tutup semua
    document.querySelectorAll('.accordion-content').forEach(el => {
      el.style.maxHeight = null;
      el.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
    });

    // Buka yang diklik
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      button.querySelector('i').style.transform = 'rotate(180deg)';
    }
  });
});

// ========================
// 4. Keranjang
// ========================
let cartCount = 0;
const cartBtn = document.querySelector('.cart-btn');
const addToCartButtons = document.querySelectorAll('.btn-secondary');

addToCartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    alert('✅ Produk ditambahkan ke keranjang!\nSilakan lanjut ke WhatsApp untuk checkout.');
  });
});

// ========================
// 5. Smooth Scroll (opsional)
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      // Tutup mobile menu
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
      }
    }
  });
});
