const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

const modalLinks = document.querySelectorAll(".link-modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modalLinks.forEach((link) =>
  link.addEventListener("click", () => {
    modal.style.display = "none";
  })
);

// CARD SLIDERS

const isInViewport = function (elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
// read the link on how above code works

const findMe = document.querySelectorAll(".card");

window.addEventListener(
  "scroll",
  function (event) {
    // add event on scroll
    if (this.window.innerWidth < 1200) {
      findMe.forEach((element, i) => {
        //for each .thisisatest
        if (isInViewport(element)) {
          if (i % 2 !== 0) {
            element.classList.add("slide-in-left");
          } else if (i % 2 === 0) {
            element.classList.add("slide-in-right");
          }
        }
      });
    } else {
      findMe.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("scale-in-hor-left");
        }
      });
    }
  },
  false
);
