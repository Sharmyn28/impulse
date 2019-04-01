
// Se inicializa libreria OwlCarousel para el tema 2
$('#theme2-carousel').owlCarousel({
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

// se inicializa libreria OwlCarousel para tema 1
$('#theme1-slider').owlCarousel({
  autoWidth: true,
  items: 6
})

function enableInfo (item) {
  var itemList = ['item-top1', 'item-top2', 'item-top3', 'item-top4', 'item-top5', 'item-top6']
  for (var i in itemList) {
    var temp = parseInt(i) + 1
    // console.log(temp);
    if (temp !== item) {
      var tempElement = 'item-top' + temp
      var tempNumberClass = 'number' + temp
      var tempImageClass = 'image-' + temp
      var tempTonoClass = 'tono-' + temp
      // se eliminan las clases a todos los que no son el elemento actual
      document.getElementById(tempElement).classList.remove('change-item-top')
      document.getElementById(tempNumberClass).classList.remove('enable-info')
      document.getElementById(tempImageClass).classList.remove('changes-info')
      document.getElementById(tempTonoClass).classList.remove('changes-tono')
    }
  }

  var currentElement = 'item-top' + item
  var currentNumberClass = 'number' + item
  var currentImageClass = 'image-' + item
  var currentTonoClass = 'tono-' + item
  // se añade las clases al elemento actual (elemento onclick)
  document.getElementById(currentElement).classList.add('change-item-top')
  document.getElementById(currentNumberClass).classList.add('enable-info')
  document.getElementById(currentImageClass).classList.add('changes-info')
  document.getElementById(currentTonoClass).classList.add('changes-tono')
}

// al crear documento se inicializa con Tipo 3 de piel acitvado en el carousel
$('document').ready(function () {
  enableInfo(3)
})
