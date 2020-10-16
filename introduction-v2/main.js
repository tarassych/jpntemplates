let collapse = document.querySelector(".introduction__collapse");

collapse.onclick = function (e) {
  if (e.target.classList.contains("introduction__toggler")) {
    e.target.classList.toggle("open");
  } else {
    e.target.parentNode.parentNode.classList.toggle("open");
  }
};

var mySwiper = new Swiper(".swiper-container-introduction", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
