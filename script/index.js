document.addEventListener("DOMContentLoaded", function () {
  const iconLight = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon size-4 text-secondary"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <span class="block text-secondary lg-hidden">Dark</span>`

  const iconDark = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sun size-4 text-secondary"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <span class="block text-secondary lg-hidden">Light</span`;

  const iconDarkMode = document.getElementById("iconDarkMode");
  const iconDarkModeM = document.getElementById("iconDarkModeM");
  const toggleButton = document.getElementById("toggleDarkMode");
  const toggleButtonM = document.getElementById("toggleDarkModeM");
  const heroImage = document.getElementById("heroImage");

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    iconDarkMode.innerHTML = iconDark;
    iconDarkModeM.innerHTML = iconDark;
    heroImage.src = "/images/hero-image-dark.webp";
  } else {
    iconDarkMode.innerHTML = iconLight;
    iconDarkModeM.innerHTML = iconLight;
    document.body.classList.remove("dark-mode");
    heroImage.src = "/images/hero-image-light.webp";
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      iconDarkMode.innerHTML = iconDark;
      heroImage.src = "/images/hero-image-dark.webp";
      localStorage.setItem("dark-mode", "true");
    } else {
      iconDarkMode.innerHTML = iconLight;
      heroImage.src = "/images/hero-image-light.webp";
      localStorage.setItem("dark-mode", "false");
    }
  });

  toggleButtonM.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      iconDarkModeM.innerHTML = iconDark;
      heroImage.src = "/images/hero-image-dark.webp";
      localStorage.setItem("dark-mode", "true");
    } else {
      iconDarkModeM.innerHTML = iconLight;
      heroImage.src = "/images/hero-image-light.webp";
      localStorage.setItem("dark-mode", "false");
    }
  });

  // dropdown-menu
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownHover = document.querySelector(".dropdown-hover");

  dropdownMenu.addEventListener("mouseenter", () => {
    dropdownHover.classList.add("df");
  });

  dropdownHover.addEventListener("mouseleave", () => {
    dropdownHover.classList.remove("df");
  });

  dropdownMenu.addEventListener("click", () => {
    dropdownHover.classList.toggle("df");
  });

  // testimonials-slider
  let index = 0;
  const slider = document.getElementById("testimonials-slider");
  const slides = document.querySelectorAll(".testimonial-slide");
  // lấy độ dài của 1 slide
  const slideWidth = slides[0].clientWidth;
  const totalSlides = slides.length;

  document.getElementById("next-btn").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    console.log("next", index);
    updateSlider();
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    console.log("prev", index);
    updateSlider();
  });

  function updateSlider() {
    slider.style.transform = `translateX(calc(${slideWidth}px*${-index}))`;
  }

  // select subject
  const button = document.getElementById("select-button");
  const dropdown = document.getElementById("dropdown");
  const selectedValue = document.getElementById("selected-value");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("block");
    dropdown.style.width = button.offsetWidth + "px";
    if (dropdown.classList.contains("hidden")) {
      button.classList.remove("border-main");
    } else {
      button.classList.add("border-main");
    }
  });

  dropdown.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const value = event.target.getAttribute("data-value");
      selectedValue.textContent = value;
      dropdown.classList.add("hidden");
      dropdown.classList.remove("block");
      button.classList.remove("border-main");
    }
  });

  document.addEventListener("click", (event) => {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add("hidden");
      dropdown.classList.remove("block");
      button.classList.remove("border-main");
    }
  });

  // Accordion
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      content.classList.toggle("active");

      // svg rotate
      const svg = header.querySelector("svg");
      svg.style.transform = content.classList.contains("active")
        ? "rotate(180deg)"
        : "rotate(0deg)";

      // Remove active class from all other contents
      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item !== content) {
          item.classList.remove("active");
        }
      });
    });
  });

  // Modal
  const openDialog = document.getElementById('openDialog');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeDialog = document.getElementById('closeDialog');
  const modalOverlayBackdrop = document.getElementById('modalOverlayBackdrop');

  // Open modal
  openDialog.addEventListener('click', () => {
    modalOverlay.classList.add('block');
  });

  // Close modal
  closeDialog.addEventListener('click', () => {
    modalOverlay.classList.remove('block');
  });

  modalOverlayBackdrop.addEventListener('click', () => {
    modalOverlay.classList.remove('block');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalOverlay.classList.remove('block');
    }
  });

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove('block');
    }
  });
});
