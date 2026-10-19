(function () {
  const yearEl = document.getElementById("year");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeKey = "profile-theme";

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(isOpen) {
    if (!nav || !navToggle) {
      return;
    }

    nav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = !nav.classList.contains("is-open");
      setNavOpen(isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  function applyTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("theme-light", isLight);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.textContent = isLight
        ? "Switch to dark theme"
        : "Switch to light theme";
    }
  }

  const savedTheme = localStorage.getItem(themeKey);
  applyTheme(savedTheme === "light" ? "light" : "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = document.body.classList.contains("theme-light")
        ? "dark"
        : "light";
      localStorage.setItem(themeKey, nextTheme);
      applyTheme(nextTheme);
    });
  }
})();
console.log("JavaScript connected");
const themeButton = document.getElementById("themeToggle");
 themeButton.addEventListener("click", function ()
  {   document.body.classList.toggle("dark-mode");  
     if (document.body.classList.contains("dark-mode"))
       {  themeButton.textContent = "Switch to Light Mode";   }
      else {  themeButton.textContent = "Switch to Dark Mode";   } });