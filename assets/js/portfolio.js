// Selectors for the icons
const languageSwitchButton = document.querySelector("#language-ico");
const themeButton = document.querySelector("#theme-ico");

// Selectors for the links
const homeLink = document.querySelector("#home-link");
const academicsLink = document.querySelector("#academics-link");
const portfolioLink = document.querySelector("#portfolio-link");

languageSwitchButton.addEventListener("click", () => {
  storeLanguage();
  switchLanguage(localStorage.getItem("lang"));
});

// store language setting
const storeLanguage = function () {
  const currentLanguage = localStorage.getItem("lang");
  if (currentLanguage === "ENG" || currentLanguage === null) {
    localStorage.setItem("lang", "HUN");
  } else {
    localStorage.setItem("lang", "ENG");
  }
};

const switchLanguage = function (lang) {
  if (lang === "HUN") {
    // ** HUNGARIAN ** //
    // Setting text of links
    homeLink.textContent = "Rólam";
    academicsLink.textContent = "Tanulmányok";
    portfolioLink.textContent = "Portfólió";

    // Setting title for icons
    languageSwitchButton.title = "Váltás magyar és angol nyelv között";
    themeButton.title = "Váltás világos és sötét téma között";
  } else {
    // ** ENGLISH ** //
    // Setting text of links
    homeLink.textContent = "About me";
    academicsLink.textContent = "Academics";
    portfolioLink.textContent = "Portfolio";

    // Setting title for icons
    languageSwitchButton.title = "Switch between hungarian and english";
    themeButton.title = "Switch between light and dark mode";
  }
};

document.onload = switchLanguage(localStorage.getItem("lang"));
