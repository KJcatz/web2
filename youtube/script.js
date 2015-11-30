function addVideos(data) {
  console.log(data);
  for(var i = 0; i < data.items.length; i++) {
    addAVid(data.items[i]);
  }
}

function addAVid(item) {
  var title = item.snippet.title;
  var imageUrl = item.snippet.thumbnails.medium.url;

  var $container = $(".container");

  var $vid = $("<div class='vid'>");

  var $heading = $("<h2>").text(title);
  var $img = $("<img>").attr("src", imageUrl);

  $vid.append($img, $heading);

  $container.append($vid);

  $img.on("click",function(e) {
    showModal(item);
  });
}

function showModal(item) {
  var title = item.snippet.title;
  var videoId = item.id.videoId;
  var caption = item.snippet.description;

  $(".modal").empty();

  var $heading = $("<h2>").text(title);
  var $video = $("<iframe>").attr("src", "https://www.youtube.com/embed/" + videoId)
  var $caption= $("<p>").text(caption);

   $(".modal").append($heading,$video,$caption);

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
