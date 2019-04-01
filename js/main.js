
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
$("#theme1-slider").owlCarousel({
  autoWidth:true,
  items:6
});

document.getElementById("tono-1").onclick = enableInfo1;
function enableInfo1() {
  document.getElementById("item-top2").classList.remove("change-item-top");
  document.getElementById("item-top3").classList.remove("change-item-top");
  document.getElementById("item-top4").classList.remove("change-item-top");
  document.getElementById("item-top5").classList.remove("change-item-top");
  document.getElementById("item-top6").classList.remove("change-item-top");
  document.getElementById("item-top1").classList.add("change-item-top");
  document.getElementById("number2").classList.remove("enable-info");
  document.getElementById("number3").classList.remove("enable-info");
  document.getElementById("number4").classList.remove("enable-info");
  document.getElementById("number5").classList.remove("enable-info");
  document.getElementById("number6").classList.remove("enable-info");
  document.getElementById("number1").classList.add("enable-info");
  document.getElementById("image-6").classList.remove("changes-info");
  document.getElementById("image-2").classList.remove("changes-info");
  document.getElementById("image-3").classList.remove("changes-info");
  document.getElementById("image-4").classList.remove("changes-info");
  document.getElementById("image-5").classList.remove("changes-info");
  document.getElementById("image-1").classList.add("changes-info");
  document.getElementById("tono-6").classList.remove("changes-tono");
  document.getElementById("tono-2").classList.remove("changes-tono");
  document.getElementById("tono-3").classList.remove("changes-tono");
  document.getElementById("tono-4").classList.remove("changes-tono");
  document.getElementById("tono-5").classList.remove("changes-tono");
  document.getElementById("tono-1").classList.add("changes-tono");
}
document.getElementById("tono-2").onclick = enableInfo2;
function enableInfo2() {
  document.getElementById("item-top1").classList.remove("change-item-top");
  document.getElementById("item-top3").classList.remove("change-item-top");
  document.getElementById("item-top4").classList.remove("change-item-top");
  document.getElementById("item-top5").classList.remove("change-item-top");
  document.getElementById("item-top6").classList.remove("change-item-top");
  document.getElementById("item-top2").classList.add("change-item-top");
  document.getElementById("number1").classList.remove("enable-info");
  document.getElementById("number3").classList.remove("enable-info");
  document.getElementById("number4").classList.remove("enable-info");
  document.getElementById("number5").classList.remove("enable-info");
  document.getElementById("number6").classList.remove("enable-info");
  document.getElementById("number2").classList.add("enable-info");
  document.getElementById("image-1").classList.remove("changes-info");
  document.getElementById("image-6").classList.remove("changes-info");
  document.getElementById("image-3").classList.remove("changes-info");
  document.getElementById("image-4").classList.remove("changes-info");
  document.getElementById("image-5").classList.remove("changes-info");
  document.getElementById("image-2").classList.add("changes-info");
  document.getElementById("tono-1").classList.remove("changes-tono");
  document.getElementById("tono-6").classList.remove("changes-tono");
  document.getElementById("tono-3").classList.remove("changes-tono");
  document.getElementById("tono-4").classList.remove("changes-tono");
  document.getElementById("tono-5").classList.remove("changes-tono");
  document.getElementById("tono-2").classList.add("changes-tono");
}
document.getElementById("tono-3").onclick = enableInfo3;
function enableInfo3() {
  document.getElementById("item-top1").classList.remove("change-item-top");
  document.getElementById("item-top2").classList.remove("change-item-top");
  document.getElementById("item-top4").classList.remove("change-item-top");
  document.getElementById("item-top5").classList.remove("change-item-top");
  document.getElementById("item-top6").classList.remove("change-item-top");
  document.getElementById("item-top3").classList.add("change-item-top");
  document.getElementById("number1").classList.remove("enable-info");
  document.getElementById("number2").classList.remove("enable-info");
  document.getElementById("number4").classList.remove("enable-info");
  document.getElementById("number5").classList.remove("enable-info");
  document.getElementById("number6").classList.remove("enable-info");
  document.getElementById("number3").classList.add("enable-info");
  document.getElementById("image-1").classList.remove("changes-info");
  document.getElementById("image-2").classList.remove("changes-info");
  document.getElementById("image-6").classList.remove("changes-info");
  document.getElementById("image-4").classList.remove("changes-info");
  document.getElementById("image-5").classList.remove("changes-info");
  document.getElementById("image-3").classList.add("changes-info");
  document.getElementById("tono-1").classList.remove("changes-tono");
  document.getElementById("tono-2").classList.remove("changes-tono");
  document.getElementById("tono-6").classList.remove("changes-tono");
  document.getElementById("tono-4").classList.remove("changes-tono");
  document.getElementById("tono-5").classList.remove("changes-tono");
  document.getElementById("tono-3").classList.add("changes-tono");
}
document.getElementById("tono-4").onclick = enableInfo4;
function enableInfo4() {
  document.getElementById("item-top1").classList.remove("change-item-top");
  document.getElementById("item-top2").classList.remove("change-item-top");
  document.getElementById("item-top3").classList.remove("change-item-top");
  document.getElementById("item-top5").classList.remove("change-item-top");
  document.getElementById("item-top6").classList.remove("change-item-top");
  document.getElementById("item-top4").classList.add("change-item-top");
  document.getElementById("number1").classList.remove("enable-info");
  document.getElementById("number2").classList.remove("enable-info");
  document.getElementById("number3").classList.remove("enable-info");
  document.getElementById("number5").classList.remove("enable-info");
  document.getElementById("number6").classList.remove("enable-info");
  document.getElementById("number4").classList.add("enable-info");
  document.getElementById("image-1").classList.remove("changes-info");
  document.getElementById("image-2").classList.remove("changes-info");
  document.getElementById("image-3").classList.remove("changes-info");
  document.getElementById("image-6").classList.remove("changes-info");
  document.getElementById("image-5").classList.remove("changes-info");
  document.getElementById("image-4").classList.add("changes-info");
  document.getElementById("tono-1").classList.remove("changes-tono");
  document.getElementById("tono-2").classList.remove("changes-tono");
  document.getElementById("tono-3").classList.remove("changes-tono");
  document.getElementById("tono-6").classList.remove("changes-tono");
  document.getElementById("tono-5").classList.remove("changes-tono");
  document.getElementById("tono-4").classList.add("changes-tono");
}
document.getElementById("tono-5").onclick = enableInfo5;
function enableInfo5() {
  document.getElementById("item-top1").classList.remove("change-item-top");
  document.getElementById("item-top2").classList.remove("change-item-top");
  document.getElementById("item-top3").classList.remove("change-item-top");
  document.getElementById("item-top4").classList.remove("change-item-top");
  document.getElementById("item-top6").classList.remove("change-item-top");
  document.getElementById("item-top5").classList.add("change-item-top");
  document.getElementById("number1").classList.remove("enable-info");
  document.getElementById("number2").classList.remove("enable-info");
  document.getElementById("number3").classList.remove("enable-info");
  document.getElementById("number4").classList.remove("enable-info");
  document.getElementById("number6").classList.remove("enable-info");
  document.getElementById("number5").classList.add("enable-info");
  document.getElementById("image-1").classList.remove("changes-info");
  document.getElementById("image-2").classList.remove("changes-info");
  document.getElementById("image-3").classList.remove("changes-info");
  document.getElementById("image-4").classList.remove("changes-info");
  document.getElementById("image-6").classList.remove("changes-info");
  document.getElementById("image-5").classList.add("changes-info");
  document.getElementById("tono-1").classList.remove("changes-tono");
  document.getElementById("tono-2").classList.remove("changes-tono");
  document.getElementById("tono-3").classList.remove("changes-tono");
  document.getElementById("tono-4").classList.remove("changes-tono");
  document.getElementById("tono-6").classList.remove("changes-tono");
  document.getElementById("tono-5").classList.add("changes-tono");
}
document.getElementById("tono-6").onclick = enableInfo6;
function enableInfo6() {
  document.getElementById("item-top1").classList.remove("change-item-top");
  document.getElementById("item-top2").classList.remove("change-item-top");
  document.getElementById("item-top3").classList.remove("change-item-top");
  document.getElementById("item-top4").classList.remove("change-item-top");
  document.getElementById("item-top5").classList.remove("change-item-top");
  document.getElementById("item-top6").classList.add("change-item-top");
  document.getElementById("number1").classList.remove("enable-info");
  document.getElementById("number2").classList.remove("enable-info");
  document.getElementById("number3").classList.remove("enable-info");
  document.getElementById("number4").classList.remove("enable-info");
  document.getElementById("number5").classList.remove("enable-info");
  document.getElementById("number6").classList.add("enable-info");
  document.getElementById("image-1").classList.remove("changes-info");
  document.getElementById("image-2").classList.remove("changes-info");
  document.getElementById("image-3").classList.remove("changes-info");
  document.getElementById("image-4").classList.remove("changes-info");
  document.getElementById("image-5").classList.remove("changes-info");
  document.getElementById("image-6").classList.add("changes-info");
  document.getElementById("tono-1").classList.remove("changes-tono");
  document.getElementById("tono-2").classList.remove("changes-tono");
  document.getElementById("tono-3").classList.remove("changes-tono");
  document.getElementById("tono-4").classList.remove("changes-tono");
  document.getElementById("tono-5").classList.remove("changes-tono");
  document.getElementById("tono-6").classList.add("changes-tono");
}

// al crear documento se inicializa con Tipo 3 de piel acitvado en el carousel
$('document').ready(function(){
  enableInfo3()
});
