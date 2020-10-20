$(document).ready(function() {
  $(".clickable").click(function() {
    $(".card-body-showing").toggle();
    $(".card-body-hidden").toggle();
  });
});