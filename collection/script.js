function showModal(item) {
   $(".modal").empty();

   var $h1 = $("<h1>").text(item.Meal);
   var $img = $("<img>").attr("src",item.images);
   var $p = $("<p>").text(item.Dish);
   var $h4 = $("<h4>").text(item.Rice);

   $(".modal").append($img,$h1,$p,$h4);

   $(".overlay").show();
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}

function addItem(item) {
  var $li = $("<li>").addClass("item").addClass(item.Rice.toLowerCase()).addClass(item.Meat.toLowerCase()).addClass(item.Dish.toLowerCase());


  $li.attr("data-category",item.Rice);
  $li.attr("data-category2",item.Meat);
  $li.attr("data-category3",item.Dish);

  var $h2 = $("<h2 class='name'>").text(item.Meal);
  var $p = $("<p class='description'>").text(item.Dish);
  var $img = $("<img>").attr("src",item.images);

  $li.append($h2, $img);

  $li.on("click",function(e) {
      showModal(item);
  });

  $(".collection").append($li);
};

function addItems(data) {             // calling data from spreadsheet
  for(var i=0;i<data.length;i++) {    // loop the call for all categories
    addItem(data[i]);
  }
}


function callback(data) {                // calling specific datii

  addItems(data);

  var $container = $('.collection');
  $container.packery({
    itemSelector: '.item',
    gutter: 10,
  });
  $container.css("visibility","hidden")
  $container.imagesLoaded( function() {
  $container.packery();
  $container.css("visibility","visible")
  });

  var myCollection = $(".item").collection({
    filters: {
      "title": "h2",
      "category": "[data-category]",
      "category2":"[data-category2]",
      "category3":"[data-category3]",
    },

    update: function() {
      $container.packery();
      setTimeout(function() { $container.packery()},600);
    },
    ordered: function() {
      $container.packery('reloadItems');
      console.log("Whoa");
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); },
  });

  $(".category").on("click",function(e) {
    var selected = $(this).hasClass("selected");

      var category = $(this).data("category");
      $("#filter-bar button.category").removeClass("selected");
        if(selected){
          myCollection.filtered("category","");
        } else {
          $(this).addClass("selected");
          myCollection.filtered("category",category);
        }
  });

  $(".category2").on("click",function(e) {
    var selected = $(this).hasClass("selected");

      var category = $(this).data("category2");
      $("#filter-bar button.category2").removeClass("selected");
        if(selected){
          myCollection.filtered("category2","");
        } else {
          $(this).addClass("selected");
          myCollection.filtered("category2",category);
        }
  });

  $(".category3").on("click",function(e) {
    var selected = $(this).hasClass("selected");

      var category = $(this).data("category3");
      $("#filter-bar button.category3").removeClass("selected");
        if(selected){
          myCollection.filtered("category3","");
        } else {
          $(this).addClass("selected");
          myCollection.filtered("category3",category);
        }
  });

  $(".order").on("click",function(e) {
      var order = $(this).data("order");
      $("#filter-bar button.category").removeClass("selected");
      $(this).addClass("selected");
      myCollection.ordered(order);
  });



  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {
      hideModal();
  });


}

  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/153L6DGICWbusE2OjEd3QRsfWtmI_HZmm0p_eHn5J4us/pubhtml",
                   callback: callback,
                   simpleSheet: true } )
