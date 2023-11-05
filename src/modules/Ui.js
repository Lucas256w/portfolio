class UI {
  static activateUi() {
    this.activateDarkmodeToggle();
    this.activateNavBar();
  }

  static activateDarkmodeToggle() {
    const checkbox = document.querySelector("#dark-mode");
    const body = document.querySelector("body");
    const content = document.querySelector(".content");
    const nav = document.querySelector("nav");

    checkbox.addEventListener("click", () => {
      body.classList.toggle("dark");
      content.classList.toggle("dark");
      nav.classList.toggle("dark");
    });
  }

  static activateNavBar() {
    const about = document.querySelector("#about");
    const aboutSection = document.querySelector(".about-section");
    about.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}

export default UI;
