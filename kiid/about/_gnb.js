document.addEventListener("DOMContentLoaded", () => {
  projectMenuHandler();
  hamburgerHandler();
  scrollHandler();
});

const projectMenuHandler = () => {
  const onOffActiveName = (on) => {
    if (on) {
      document.getElementById("projects").classList.add("--highlighted");
    } else {
      document.getElementById("projects").classList.remove("--highlighted");
    }
  };

  const onOffDropdown = (on) => {
    if (on) {
      document.getElementById("projects-dropdown").classList.remove("--hidden");
    } else {
      document.getElementById("projects-dropdown").classList.add("--hidden");
    }
  };

  const onOffPointer = (subAnchor, on) => {
    if (on) {
      subAnchor
        .getElementsByTagName("img")[0]
        .classList.remove("--transparent");
    } else {
      subAnchor.getElementsByTagName("img")[0].classList.add("--transparent");
    }
  };

  const projectSubAnchorMouseEventHandler = () => {
    const projectSubAnchors = document.getElementsByClassName(
      "project-subAnchor-container"
    );
    for (let i = 0; i < projectSubAnchors.length; i++) {
      const subAnchor = projectSubAnchors[i];
      subAnchor.addEventListener("mouseenter", () => {
        onOffPointer(subAnchor, true);
      });
      subAnchor.addEventListener("mouseleave", () => {
        onOffPointer(subAnchor), false;
      });
    }
  };

  const projectsMenu = document.getElementById("projects-menu");
  projectsMenu.addEventListener("mouseenter", (e) => {
    onOffActiveName(true);
    onOffDropdown(true);
    projectSubAnchorMouseEventHandler();
    e.stopPropagation();
  });
  projectsMenu.addEventListener("mouseleave", (e) => {
    onOffActiveName(false);
    onOffDropdown(false);
    e.stopPropagation();
  });
};

const hamburgerHandler = () => {
  const onOffSlideIn = () => {
    document.getElementById(
      "gnb-slideIn"
    ).style.height = `${window.innerHeight}px`;
    document.getElementById("gnb-slideIn").classList.toggle("--hidden");
    onOffSubAnchors(false);
  };

  const onOffContentsFixed = () => {
    document.getElementById("container").classList.toggle("--fixed");
  };

  const onOffSubAnchors = (on) => {
    const subAnchors = document.getElementsByClassName("subanchor");
    for (let i = 0; i < subAnchors.length; i++) {
      if (on) {
        subAnchors[i].classList.remove("--folded");
      } else {
        subAnchors[i].classList.add("--folded");
      }
    }
  };

  const hamburgerButtons = document.getElementsByClassName("hamburger-button");
  for (let i = 0; i < hamburgerButtons.length; i++) {
    hamburgerButtons[i].addEventListener("click", (e) => {
      onOffSlideIn();
    });
  }

  const slideInProjects = document.getElementById("slideIn-projects");
  slideInProjects.addEventListener("click", (e) => {
    onOffSubAnchors(true);
  });
};

// const scrollHandler = () => {
//   document.addEventListener("scroll", (e) => {
//     if (window.scrollY > 100) {
//       document.querySelector(".gnb-container").style.background = "black";
//     } else {
//       document.querySelector(".gnb-container").style.background =
//         "rgba(0, 0, 0, 0)";
//     }
//   });
// };
