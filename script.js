console.log("JavaScript is connected!");
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
const projectSearch = document.getElementById("project-search");
const projectItems = document.querySelectorAll("#projects .project-list li");
const noProjectsMessage = document.getElementById("no-projects");

if (projectSearch && noProjectsMessage) {
  projectSearch.addEventListener("input", function () {
    const query = projectSearch.value.toLowerCase().trim();
    let count = 0;

    projectItems.forEach(function (item) {
      const matches = item.innerText.toLowerCase().includes(query);

      item.style.display = matches ? "" : "none";

      if (matches) {
        count++;
      }
    });

    noProjectsMessage.style.display = count === 0 ? "block" : "none";
  });
}
