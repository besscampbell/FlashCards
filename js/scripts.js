$(document).ready(function() {
  $(".clickable").click(function() {
    $(".card-body-showing").toggle();
    $(".card-body-hidden").toggle();
    // $("#card1h").toggle();
    // $("#card1s").toggle();
    // $("#2h").toggle();
    // $("#2s").toggle();
  });
});

// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".card-body-showing").toggle();
//     $(".card-body-hidden").toggle();
//   });
// });