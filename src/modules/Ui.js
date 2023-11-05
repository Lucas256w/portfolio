class UI {
  static activateUi() {
    this.activateDarkmodeToggle();
  }

  static activateDarkmodeToggle() {
    const checkbox = document.querySelector("#dark-mode");
    const body = document.querySelector("body");
    const content = document.querySelector(".content");

    checkbox.addEventListener("click", () => {
      body.classList.toggle("dark");
      content.classList.toggle("dark");
    });
  }
}

export default UI;
