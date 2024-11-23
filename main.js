const html = document.documentElement;
const btn = document.getElementById("btn-toggle-dark");

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
