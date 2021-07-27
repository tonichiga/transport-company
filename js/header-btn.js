(() => {
  const menuBtnRef = document.querySelector("[data-menu-close-button]");
  const mobileMenuRef = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open-btn");
  });
})();
