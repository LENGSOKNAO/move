let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Glider(document.querySelector(".glider"), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-btn-pre",
    next: ".glider-btn-next",
  },
});
new Glider(document.querySelector(".glider1"), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-btn-pre1",
    next: ".glider-btn-next1",
  },
});
new Glider(document.querySelector(".glider2"), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-btn-pre2",
    next: ".glider-btn-next2",
  },
});
new Glider(document.querySelector(".glider3"), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-btn-pre3",
    next: ".glider-btn-next3",
  },
});
new Glider(document.querySelector(".glider4"), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-btn-pre4",
    next: ".glider-btn-next4",
  },
});
