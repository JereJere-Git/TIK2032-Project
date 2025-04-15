document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    fadeElements.forEach((el, index) => {
      el.style.animationDelay = el.style.animationDelay || `${index * 0.3}s`;
    });
  
    // Optionally start typing animations again if needed
    // but this is handled by CSS typing-text class
  });
  