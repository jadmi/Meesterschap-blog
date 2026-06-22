const saved = localStorage.getItem("theme");
if (saved) document.documentElement.style.setProperty("--theme", saved);

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-theme");
    document.documentElement.style.setProperty("--theme", theme);
    localStorage.setItem("theme", theme);
  });
});
