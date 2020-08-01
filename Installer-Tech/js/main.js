let toggler = document.querySelector(".header__toggler");
let nav = document.querySelector(".header__navbar");
toggler.onclick = function () {
  if (this.classList.contains("open")) {
    this.classList.remove("open");
    nav.classList.remove("open");
    this.classList.add("close");
    nav.classList.add("close");
  } else {
    this.classList.remove("close");
    nav.classList.remove("close");
    this.classList.add("open");
    nav.classList.add("open");
  }
};
nav.onclick = function () {
  toggler.classList.remove("open");
  this.classList.remove("open");
  toggler.classList.add("close");
  this.classList.add("close");
};

let popup = document.querySelector("#popup");
let popupWindow = document.querySelector(".header__popup");
let popupClose = document.querySelector("#close");
popup.onclick = function () {
  popupWindow.classList.toggle("open");
};
popupClose.onclick = function () {
  popupWindow.classList.remove("open");
};

let el = document.querySelector("#collapse");
if (el) {
  el.onclick = function (e) {
    e.target.classList.toggle("open");

    let content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
