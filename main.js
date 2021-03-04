const nav = document.querySelector(".nav");
const navLinks = nav.querySelectorAll(".nav__link");
const activeLink = nav.querySelector(".nav__dropdown--active");
const activeLinkInitialPosition = activeLink.getBoundingClientRect().left;
navLinks.forEach((link) => {
  const dropDowns = Array.from(link.children);

  if (dropDowns.length > 0 && dropDowns[0].className === "nav__dropdown") {
    link.addEventListener("mouseenter", (e) => {
      const hoverdLink = e.target;
      const currentnLinkPosition = hoverdLink.getBoundingClientRect().left;
      const activeLinkPosition = activeLink.getBoundingClientRect();
      const activeLinkCurrentPosition = activeLinkPosition.left;
      activeLink.style.transform = `translateX(${
        activeLinkCurrentPosition -
        activeLinkInitialPosition +
        currentnLinkPosition -
        activeLinkCurrentPosition -
        50
      }px)`;

      const hoverdDropDowns = Array.from(hoverdLink.children);

      hoverdDropDowns[0].style.height = "20rem";
      activeLink.style.height = `20rem`;
      const dropDownsElements = Array.from(hoverdDropDowns[0].children);
      dropDownsElements.forEach((element) => {
        element.style.display = "flex";
      });
      // }
    });
    link.addEventListener("mouseleave", (e) => {
      const hoverdLink = e.target;
      const hoverdDropDowns = Array.from(hoverdLink.children);
      hoverdDropDowns[0].style.height = "0";
      activeLink.style.height = `0`;
      const dropDownsElements = Array.from(hoverdDropDowns[0].children);
      dropDownsElements.forEach((element) => {
        element.style.display = "none";
      });
    });
  }
});
