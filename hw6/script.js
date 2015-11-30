function callback(data) {
  console.log(data);
  for(var i = 0; i < data.length; i++) {
    addAnImage(data[i]);
  }
}

function addAnImage(item) {
  var meal = item.Meal;
  var images = item.images;
  var caption = item.Rice;

  var $container = $(".container");

  var $box = $("<div class='box'>");

  var $heading = $("<h2>").text(meal);
  var $img = $("<img>").attr("src",images);
  var $caption= $("<p>").text(caption);

  $box.append($img);

  $container.append($box);

  $img.on("click",function(e) {
    showModal(item);
  });
}

function showModal(item) {
  var meal = item.Meal;
  var images = item.images;
  var caption = item.Rice;

  $(".modal").empty();

  var $heading = $("<h2>").text(meal);
  var $img = $("<img>").attr("src",images);
  var $caption= $("<p>").text(caption);

   $(".modal").append($heading,$img,$caption);

   $(".overlay").show();
   $(".overlay").on("click",function(e) {
     hideModal();
   });
   $(".modal").show();
}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}
