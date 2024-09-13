// Selectors for the icons
const languageSwitchButton = document.querySelector("#language-ico");
const themeButton = document.querySelector("#theme-ico");

// Selectors for the links
const homeLink = document.querySelector("#home-link");
const academicsLink = document.querySelector("#academics-link");
const portfolioLink = document.querySelector("#portfolio-link");

// About me selectors
const aboutMeHeader = document.querySelector("#about-me-header");
const aboutMeText = document.querySelector("#about-me-text");

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

    // Setting About me
    aboutMeHeader.textContent = "Rólam";
    aboutMeText.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque sapien mauris, nec viverra metus elementum eget. Mauris at hendrerit nisi. Mauris ornare eros quis leo viverra imperdiet. Nam non neque a eros feugiat faucibus. Ut ante erat, lacinia at est vitae, eleifend ullamcorper erat. Etiam eleifend hendrerit neque non placerat. In fermentum malesuada elit, et aliquet felis accumsan in. Morbi eleifend dolor magna, a placerat nisl sollicitudin quis. Maecenas ornare est augue, semper molestie justo auctor at. Integer vitae nisl tellus. Phasellus vel risus ac magna laoreet dignissim.";
  } else {
    // ** ENGLISH ** //
    // Setting text of links
    homeLink.textContent = "About me";
    academicsLink.textContent = "Academics";
    portfolioLink.textContent = "Portfolio";

    // Setting title for icons
    languageSwitchButton.title = "Switch between hungarian and english";
    themeButton.title = "Switch between light and dark mode";

    // Setting About me
    aboutMeHeader.textContent = "About me";
    aboutMeText.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque sapien mauris, nec viverra metus elementum eget. Mauris at hendrerit nisi. Mauris ornare eros quis leo viverra imperdiet. Nam non neque a eros feugiat faucibus. Ut ante erat, lacinia at est vitae, eleifend ullamcorper erat. Etiam eleifend hendrerit neque non placerat. In fermentum malesuada elit, et aliquet felis accumsan in. Morbi eleifend dolor magna, a placerat nisl sollicitudin quis. Maecenas ornare est augue, semper molestie justo auctor at. Integer vitae nisl tellus. Phasellus vel risus ac magna laoreet dignissim.";
  }
};

document.onload = switchLanguage(localStorage.getItem("lang"));
