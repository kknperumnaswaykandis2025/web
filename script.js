 // Modal Galeri Popup
  function showModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = src;
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  const targetDate = new Date("august 16, 2025 17:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});


