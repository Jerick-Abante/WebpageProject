
$('.about-me').hide();
$('.contact').hide();


 $('#btn1').click(function(){
  event.preventDefault();
  $('.intro').show(1000);
  $('.about-me').hide(1000);
  $('.contact').hide(1000);
 });

 $('#btn2').click(function(){
  event.preventDefault();
  $('.intro').hide(1000);
  $('.about-me').show(1000);
  $('.contact').hide(1000);
  
 });

 $('#btn3').click(function(){
  event.preventDefault();
  $('.intro').hide(1000);
  $('.about-me').hide(1000);
  $('.contact').show(1000);
  
 });

