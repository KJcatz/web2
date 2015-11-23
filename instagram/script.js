var images = null;
var users = null;

function drawImages(data) { console.log(data)
  images = data;
  for(var i = 0; i < images.data.length; i++) {
  addImage(images.data[i].images.thumbnail.url);
  }
  for(var i = 0; i < images.data.length; i++) {
  addImage(images.data[i].user.full_name);
  }
}

function addImage (url) {

  var $container = $(".container");
  var $img = $("<img>").attr("src",url);
  var $username = $("<h2>").text("My Super Heading");

  $container.append($img);
}
