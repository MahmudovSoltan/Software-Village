// ROUTTER

const mainDiv = document.querySelector("#root");
const routes = {
  "": {
    title: "home",
    data: "./Pages/home.html",
  },
  "#trainingprogram": {
    title: "trainingprogram",
    data: "./Pages/trainingprogram.html",
  },
  "#about": {
    title: "about",
    data: "./Pages/about.html",
  },
  "#quetions": {
    title: "quetions",
    data: "./Pages/quetions.html",
  },
  "#contact": {
    title: "contact",
    data: "./Pages/contact.html",
  },
};

function chechRout(hash = window.location.hash) {
  if (!hash) {
    hash = "";
  }
  document.title = routes[hash].title;
  const dataUrl = routes[hash].data;
  fetch(dataUrl)
    .then((res) => res.text())
    .then((data) => (mainDiv.innerHTML = data));
}

window.addEventListener("load", () => {
  chechRout();

  const links = document.querySelectorAll("a"); // Linkləri load hadisəsi içində tapırıq
  links.forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Default davranışı bloklamaq üçün
      const hash = link.getAttribute("href"); // href-i əldə edirik
      chechRout(hash);
    })
  );
  const home_slider = document.querySelector(".home_slider");
  const homecarusel = document.querySelector(".home_carusel");
  const carusel_btn = document.querySelectorAll(".carusel_btn");
  console.log(homecarusel);

  carusel_btn.forEach((item) =>
    item.addEventListener("click", () => {
      // home_slider.style.tarnsform = translatex("100px")
      console.log("btn click");
    })
  );
});

// SLIDER JS
