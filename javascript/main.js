$(function(){
  var accessToken = '2054109428.1677ed0.ae00cb5a59224761b5b07f4edf71d75e';
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 20 ) { return false; }
      $('<div class="post column is-half">'+
        '<a href="'+src.link+'"><img src='+src.images.standard_resolution.url+'></a></div>').appendTo('#instafeed');
    });
  });
});

// Nav toggle action
var $toggle = $('.nav-toggle');
var $menu = $('.nav-menu');

$toggle.click(function() {
$(this).toggleClass('is-active');
$menu.toggleClass('is-active');
});

var mns = "nav-scrolled",
    nav = $(".nav");

$(window).scroll(function(){
    if($(window).scrollTop() > 0) {
        nav.addClass(mns);
    }
    else {
        nav.removeClass(mns);
    }
});


openTab("round");

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("cake-chart");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tabName).style.display = "block";
};

