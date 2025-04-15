window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.remove();
    }, 800);
  }

  // Show navbar animation
  const header = document.querySelector(".fade-nav");
  if (header) {
    setTimeout(() => {
      header.classList.add("show");
    }, 200);
  }

  // Fade-in section animation
  const fadeSection = document.querySelector(".fade-in-section");
  if (fadeSection) {
    setTimeout(() => {
      fadeSection.classList.add("show");

      const elements = fadeSection.querySelectorAll(".fade-text");
      elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 150}ms`;
      });
    }, 400);
  }
});

// Simulasi kirim form
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("form-response").textContent = "Mohon isi semua bidang.";
    return;
  }

  document.getElementById("form-response").textContent = "Terima kasih! Pesan Anda telah dikirim.";
  document.getElementById("contact-form").reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact form');
  const responseBox = document.getElementById('form-response');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simulasi proses pengiriman form
      setTimeout(() => {
        responseBox.classList.remove('hidden');
        form.reset();

        setTimeout(() => {
          responseBox.classList.add('hidden');
        }, 5000);
      }, 1000);
    });
  }
});
