let images = [...document.querySelectorAll(".item-img")];
let items = [...document.querySelectorAll(".item")];

// clone img
images.forEach((img, idx) => {
  img.style.backgroundImage = `url(./img/parallax-img-${idx + 1}.jpg)`;
});

// split text
const targetTitle = document.querySelector("#title");
const results = Splitting();

// custom cursor
let cursor = document.querySelector(".cursor");

const mouseCursor = (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
};
window.addEventListener("mousemove", mouseCursor);

// custom cursor
const showCursor = (e) => {
  items.forEach((e) => {
    e.addEventListener("mouseleave", function () {
      cursor.classList.remove("is-show");
      e.classList.remove("item-show");
    });
    e.addEventListener("mouseover", function () {
      cursor.classList.add("is-show");
      e.classList.add("item-show");
    });
  });
};
showCursor();

// custom scroll
var scrollVertical = new LocomotiveScroll({
  el: document.querySelector("#vertical"),
  smooth: true,
  smoothMobile: true,
  offset: ["15%"],
});
