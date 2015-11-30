function callback(data) {
  console.log(data);
  addABox(data[0]);
}

function addABox(item) {
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
