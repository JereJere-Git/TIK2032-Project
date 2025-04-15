window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const bodyContent = document.getElementById("body-content");
  
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  
    setTimeout(() => {
      loader.style.display = "none";
      bodyContent.classList.add("fade-in");
  
      const items = document.querySelectorAll(".fade-item");
      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, i * 150); // transisi bertahap
      });
    }, 600);
  });
  