var main = function() {
  $(".toast").fadeIn(400).delay(5000).fadeOut(400);


  $("ul li a").click(function() {
    var href = $.attr(this, "href");
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });


  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("ul.topnav").stop().animate({top:"-55px"}, 200);
    } else {
      $("ul.topnav").stop().animate({top:"0px"}, 200);
    }
  });


  $(".gridpic img, .connectgrideach img").mouseover(function() {
    $(this).addClass("imgborder");
  });

  $(".gridpic img, .connectgrideach img").mouseout(function() {
    $(this).removeClass("imgborder");
  });


  $('[id^="overlay"]').click(function(){
    $("#overlay" + imagen + ', .overlay-back').fadeOut(500);
  });

  $(".pic").on('click', function () {
    imagen = parseInt($(this).attr('id'));
    $("#overlay" + imagen + ', .overlay-back').fadeIn(500);
  });  

  $("#self").hover(function() {
    $(this).toggle("explode");
  });

}

var num;

var myFunction = function() {
  alert("hi");
}		

$(document).ready(main);
/*var previousScroll = 0;
$(window).scroll(function(event){
   var scroll = $(this).scrollTop();
   if (scroll > previousScroll){
	          $("ul.topnav").stop().animate({top:"-55px"}, 200);
	    }
	    else{
	        $("ul.topnav").stop().animate({top:"0px"}, 200);
	    }
	       previousScroll = scroll;
	});*/