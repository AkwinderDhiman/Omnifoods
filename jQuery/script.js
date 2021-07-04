$(document).ready(function(){
  /*-----------STICKY NAVIGATION------- */
  $('.js--section-features').waypoint(function(direction){
      if(direction == "down"){
        $('nav').addClass('sticky');
            }else{
    $('nav').removeClass('sticky');
  }

},{
  offset: '60px;'
});


/*-----------scroll on buttons------- */
$('.js--scroll-to-plans').click(function(){
  $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
});
$('.js--scroll-to-start').click(function(){
  $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
});



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('.js--wp-1').waypoint(function(direction){
  $('.js--wp-1').addClass('animated animate__fadeInUp')

},{
  offset:'50%'
});
$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animated animate__fadeInUp')

},{
  offset:'50%'
 });



/*-----------mobile navigtion------- */
$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav')
  var icon = $('.js--nav-icon i')
  nav.slideToggle(200)
  if(icon.hasClass('ion-navicon-round')){
    icon.addClass('ion-close-round')
    icon.removeClass('ion-navicon-round')
}else{
  icon.addClass('ion-navicon-round')
  icon.removeClass('ion-close-round')
}
});

var map = new GMaps({
  div: '.map',
  lat: 38.7437396,
  lng: -9.2302438,
  zoom:12
});
map.addMarker({
  lat: 38.7437396,
  lng: -9.2302438,
  title: 'Lisbon',
  infoWindow: {
    content: '<p>Our Lisbon HQ</p>'
  }
});
});
