$(window).scroll(function(){
  var hero = $('.hero'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) hero.addClass('fixed');
  else hero.removeClass('fixed');
});