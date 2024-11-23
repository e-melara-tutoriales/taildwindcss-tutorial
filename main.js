const html = document.documentElement;
const btnMovil = document.getElementById("btn-movile");
const movileNav = document.getElementById("mobile-nav");

const btn = document.getElementById("btn-toggle-dark");

btnMovil.addEventListener("click", () => {
  movileNav.classList.toggle("hidden");
  btnMovil.classList.toggle("show-bugger");
});

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

function updateDarkMode(isDarkMode = false) {
  if (isDarkMode) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
});

updateDarkMode(matchMedia?.matches);

matchMedia.addEventListener("change", ({ matches }) => {
  updateDarkMode(matches);
});
