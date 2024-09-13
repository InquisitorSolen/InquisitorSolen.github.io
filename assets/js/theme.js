const themeSwitchButton = document.querySelector("#theme-ico");

themeSwitchButton.addEventListener("click", () => {
  storeTheme();
  document.documentElement.className = localStorage.getItem("theme");
});

// store theme
const storeTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  if (activeTheme === "light" || activeTheme === null) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// set theme when visitor returns
const setTheme = function () {
  document.documentElement.className = localStorage.getItem("theme");
};

document.onload = setTheme();
