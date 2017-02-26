$(document).ready(function() {

$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });

	$(".top_mnu li a").mPageScroll2id();
	$("input").jqBootstrapValidation();




$('.top_mnu_btn').on('click', function () {
	$('.top_mnu').toggleClass('active');
});
$('.top_mnu a').on('click', function () {
	$('.top_mnu').toggleClass('active');
});
});


