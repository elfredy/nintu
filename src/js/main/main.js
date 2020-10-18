$(document).ready(function () {
  window.onscroll = function () {
    fixFunction();
  };
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function fixFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("headerFix");
      $(".headerFix").fadeIn("slow");
    } else {
      header.classList.remove("headerFix");

      $(".headerFix").fadeOut("slow");
    }
  }
});
