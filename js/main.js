$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left orange'></i>",
    "<i class='fa fa-chevron-right orange'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})
