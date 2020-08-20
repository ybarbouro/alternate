var section = document.getElementsByTagName("section")[0];
var $cta = document.querySelector(".cta-h");

var initDraw = function initDraw() {
  section.classList.add("is-active");
};

var initReading = function initReading(e) {
  var $t = e.target;
  section.classList.toggle("is-reading");

  if (section.classList.contains("is-reading")) {
    $t.innerHTML = "MOSTRAR IMAGEN";
  } else {
    $t.innerHTML = "MÁS DETALLES";
  }
};

$cta.addEventListener("click", initReading);

window.onload = initDraw;