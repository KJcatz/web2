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

  $box.append($heading, $img, $caption);

  $container.append($box);
}
