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
    "Aspring MERN Stack Developer",
    "Frontend Developer",
    "FullStack Developer",
    "Web Developer",
    "Java Developer",
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

//BG
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let stars = [];

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars = [];

  const STAR_COUNT = Math.floor((canvas.width * canvas.height) / 2500);

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8,
      opacity: Math.random(),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
    });
  }
}

setupCanvas();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    ctx.beginPath();

    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;

    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

    ctx.fill();

    // slow floating movement
    star.x += star.dx;
    star.y += star.dy;

    // twinkle
    star.opacity += (Math.random() - 0.5) * 0.1;
    if (star.opacity < 0.2) star.opacity = 0.2;
    if (star.opacity > 1) star.opacity = 1;

    // wrap around screen
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", setupCanvas);

//The End
