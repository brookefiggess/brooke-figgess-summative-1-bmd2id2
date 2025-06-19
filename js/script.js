function goToHome() {
    window.location.href = "homepage.html";
  }

  function nextSlide() {
    const slides = document.querySelectorAll('.journal-slide');
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    if (activeIndex < slides.length - 1) {
      slides[activeIndex].classList.remove('active');
      slides[activeIndex + 1].classList.add('active');
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".journal-slider");
  
    function updateSliderBackground(value) {
      slider.style.background = `linear-gradient(to right, #EEFF00 0%, #EEFF00 ${value}%, #444 ${value}%, #444 100%)`;
    }
  
    updateSliderBackground(slider.value);
  
    slider.addEventListener("input", function () {
      updateSliderBackground(this.value);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const spendOptions = document.querySelectorAll(".spend-option");
  
    spendOptions.forEach(button => {
      button.addEventListener("click", () => {
        spendOptions.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  });
  