const mainDiv = document.querySelector("#root")
const routes = {
  "": {
    title: "home",
    data: "./Pages/home.html"
  },
  "#trainingprogram": {
    title: "trainingprogram",
    data: "./Pages/trainingprogram.html"
  },
  "#about": {
    title: "about",
    data: "./Pages/about.html"
  },
  "#quetions": {
    title: "quetions",
    data: "./Pages/quetions.html"
  },
  "#contact": {
    title: "contact",
    data: "./Pages/contact.html"
  }
}

function chechRout(hash = window.location.hash) {
  if (!hash) {
    hash = "";
  }
  document.title = routes[hash].title;
  const dataUrl = routes[hash].data;
  fetch(dataUrl)
    .then(res => res.text())
    .then(data => mainDiv.innerHTML = data);
}

window.addEventListener("load", () => {
  chechRout();

  const links = document.querySelectorAll("a"); // Linkləri load hadisəsi içində tapırıq
  links.forEach(link => link.addEventListener("click", (event) => {
    event.preventDefault(); // Default davranışı bloklamaq üçün
    const hash = link.getAttribute("href"); // href-i əldə edirik
    chechRout(hash);
  }));
});
