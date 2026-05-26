const menuBox = document.getElementById("menu-box");
const btnMenu = document.getElementById("btnmenu");
const closemenu = document.getElementById("closemenu");
const menuLinks = document.querySelectorAll("#menu-box a");
btnMenu.style.cursor = "pointer";
btnMenu.addEventListener("click", openMenu);
closemenu.addEventListener("click", closeMenu);
//click links to close menu
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
// Open and close menu functions
function openMenu() {
  menuBox.classList.remove(
    "translate-x-[120%]",
    "opacity-0",
    "pointer-events-none",
  );
  menuBox.classList.add("translate-x-0");
}
function closeMenu() {
  menuBox.classList.remove("translate-x-0");
  menuBox.classList.add(
    "translate-x-[120%]",
    "opacity-0",
    "pointer-events-none",
  );
}
const filterBtns = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".skill-category");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      b.classList.remove("active", "bg-green-400", "text-black");
    });

    btn.classList.add("active", "bg-green-400", "text-black");

    const filter = btn.dataset.filter;

    categories.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  let interval;
  let hoverTimeout;

  card.addEventListener("mouseenter", () => {
    hoverTimeout = setTimeout(() => {
      clearInterval(interval);

      let count = 0;

      let percentage = card.querySelector(".percentage");

      let barInner = card.querySelector(".bar-inner");

      let target = Number(percentage.dataset.target.replace("%", ""));

      percentage.textContent = "0%";

      barInner.style.width = "0%";

      setTimeout(() => {
        barInner.style.width = "0%";
      }, 50);

      interval = setInterval(() => {
        count++;

        percentage.textContent = count + "%";
        barInner.style.width = count + "%";

        if (count >= target) {
          clearInterval(interval);
        }
      }, 800 / target);
    }, 800);
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
  });
});
//logo flip
const logo = document.getElementById("logo");
let toggle = false;
logo.addEventListener("click", () => {
  logo.classList.add("rotate-img");
  if (toggle) {
    logo.src = logo.dataset.img1;
  } else {
    logo.src = logo.dataset.img2;
  }
  toggle = !toggle;
  setTimeout(() => {
    logo.classList.remove("rotate-img");
  }, 1000);
});
//Typing effect
let typed = new Typed(".text-animation", {
  strings: [
    "Frontend Developer",
    "FullStack Developer",
    "Java Developer",
    "Web Designer",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});
//education

const education = document.querySelector("#education");

const items = education.querySelectorAll(
  ".timeline-dot, .timeline-line, .edu-card",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // reset
        items.forEach((item) => {
          item.classList.remove("animate");
        });

        // reflow trick
        void education.offsetWidth;

        // animate one by one
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("animate");
          }, index * 300);
        });
      } else {
        // section veliya pona reset
        items.forEach((item) => {
          item.classList.remove("animate");
        });
      }
    });
  },
  {
    threshold: 0.3,
  },
);

observer.observe(education);
//loading
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // small delay for smooth feel
  setTimeout(() => {
    loader.classList.add("opacity-0");

    document.body.classList.remove("overflow-hidden");

    setTimeout(() => {
      loader.style.display = "none";
    }, 700);
  }, 1500);
});
//The End

