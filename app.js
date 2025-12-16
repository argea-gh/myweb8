// script.js

// Accordion FAQ
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

// Simulasi keranjang (opsional)
let cartCount = 0;
const cartBtn = document.querySelector('.cart-btn');
const addToCartButtons = document.querySelectorAll('.btn-secondary');

addToCartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    // Di sini bisa tambahkan logika simpan ke localStorage atau kirim ke WA
    alert('Produk ditambahkan ke keranjang!\nSilakan lanjut ke WhatsApp untuk checkout.');
  });
});

// Smooth scroll (opsional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
