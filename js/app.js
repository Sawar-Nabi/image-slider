const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
const images = [
  {
    src: "https://images.unsplash.com/photo-1543078588-0e47b1014c5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1720627569049-5962ba7cbca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1677410642801-725a73622e4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1519958135932-dca9c8841a1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1710568992645-a6db103f7a7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

images.forEach((imgs, i) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = imgs.src;
  div.className = "slides";
  // div.style.backgroundImage = `url(${img.src})`;
  div.appendChild(img);
  slider.appendChild(div);
});

const slides = document.querySelectorAll(".slides");

slides[slideIndex].classList.add("active");
if (slideIndex === 0) {
  prevBtn.setAttribute("disabled", "true");
}

prevBtn.addEventListener("click", () => {
  if (slideIndex === 1) {
    nextBtn.removeAttribute("disabled");
    slides[slideIndex].classList.remove("active");
    slideIndex--;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    prevBtn.setAttribute("disabled", "true");
  } else {
    nextBtn.removeAttribute("disabled");
    slides[slideIndex].classList.remove("active");
    slideIndex--;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (slideIndex + 1 === slides.length - 1) {
    slides[slideIndex].classList.remove("active");
    slideIndex++;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    nextBtn.setAttribute("disabled", "true");
  } else {
    prevBtn.removeAttribute("disabled");
    slides[slideIndex].classList.remove("active");
    slideIndex++;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
});

const autoNext = () => {
  setInterval(() => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
      slides[slideIndex].classList.remove("active");
      slideIndex++;
      slides[slideIndex].classList.add("active");
      slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    } else if (slideIndex >= 0) {
      slides[slideIndex].classList.remove("active");
      slideIndex++;
      slides[slideIndex].classList.add("active");
      slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  }, 5000);
};

// autoNext();
