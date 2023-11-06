class UI {
  static activateUi() {
    this.activateDarkmodeToggle();
    this.activateNavBar();
    // this.loadSections();
  }

  static activateDarkmodeToggle() {
    const checkbox = document.querySelector("#dark-mode");
    const body = document.querySelector("body");
    const content = document.querySelector(".content");
    const nav = document.querySelector("nav");
    const github = document.querySelectorAll("#github-icon");
    const linkedin = document.querySelector("#linkedin-icon");
    const svgIcons = document.querySelectorAll(".svg-icons");

    if (checkbox.checked) {
      body.classList.toggle("dark");
      content.classList.toggle("dark");
      nav.classList.toggle("dark");
      github.forEach((git) => {
        git.classList.toggle("dark");
      });
      svgIcons.forEach((svg) => {
        svg.classList.toggle("dark");
      });
      linkedin.classList.toggle("dark");
    }

    checkbox.addEventListener("click", () => {
      body.classList.toggle("dark");
      content.classList.toggle("dark");
      nav.classList.toggle("dark");
      github.forEach((git) => {
        git.classList.toggle("dark");
      });
      svgIcons.forEach((svg) => {
        svg.classList.toggle("dark");
      });
      linkedin.classList.toggle("dark");
    });
  }

  static activateNavBar() {
    const about = document.querySelector("#about");
    const aboutSection = document.querySelector(".about-section");

    const projects = document.querySelector("#projects");
    const projectSection = document.querySelector(".projects-section");

    const contact = document.querySelector("#contact");
    const contactSection = document.querySelector(".contact-section");

    about.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    projects.addEventListener("click", () => {
      projectSection.scrollIntoView({ behavior: "smooth" });
    });

    contact.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  static loadSections() {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0;
        }
      });
    }, options);

    sections.forEach((section) => {
      if (!section.classList.contains("introduction")) {
        observer.observe(section);
      }
    });
  }
}

export default UI;
