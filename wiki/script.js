$(".scroller").scrollFlight();
$("#title").on("arrived",function() {
  $(this).addClass("arrived");
});

$(".image-container").on("click",function() {
  alert('wtf');
});
