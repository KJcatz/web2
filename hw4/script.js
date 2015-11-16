$(".scroller").scrollFlight();
$("h4").on("arrived",function() {
  $(this).addClass("arrives");
});

$(".image-container").on("click",function() {
  alert('wtf');
});

$(".dash").on("arrived", function(e) {
  $(this).addClass("arrived");
  return false;
});

$(".dash").on("rearrived", function(e) {
  $(this).removeClass("arrived");
  return false;
});

  $(".image-container").on("arrived", function(e) {
    $(this).addClass("arrived");
    return false;
  });

  $(".image-container").on("rearrived", function(e) {
    $(this).removeClass("arrived");
    return false;
  });

  $(".image-container2").on("arrived", function(e) {
    $(this).addClass("arrived");
    return false;
  });

  $(".image-container2").on("rearrived", function(e) {
    $(this).removeClass("arrived");
    return false;
  });

  $(".image-container3").on("arrived", function(e) {
    $(this).addClass("arrived");
    return false;
  });

  $(".image-container3").on("rearrived", function(e) {
    $(this).removeClass("arrived");
    return false;
  });
