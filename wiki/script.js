$(window).scroll(function(){
    if($(document).scrollTop() > 600 && $(document).scrollTop() < 2500){
         var temp =  100 - ($(document).scrollTop() - 1200) / 8;
         var bonus = '50% ' + temp*-1 + '%';
         document.getElementById('div').style.backgroundPosition = bonus;
    }
}

$(".scroller").scrollFlight();
$(".title").on("arrived",function() {
  $(this).addClass("arrived");
});
