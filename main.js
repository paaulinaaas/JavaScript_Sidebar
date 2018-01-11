var backgrounds = ["img/photo1.jpeg", "img/photo2.jpeg", "img/photo3.jpeg", "img/photo4.jpeg"]
var bg = $('.bg').length;


$('#open_close').siblings().hide();

$('#open_close').click(function() 
{
	$(this).siblings().toggle(600);
	$(this).toggleClass('open')

	for (i=0; i<backgrounds.length; i++) 
	{
		$('.bg'+(i+1)).css("background-image", "url(" +backgrounds[i] + ")")
	}

	if ($(this).hasClass('open')) 
	{
		$('.side_bar').animate(
		{
		width: '40%'
		}, 1000, function() 
		{
			$('#open_close').text("Close");
		});
	} 
	else 
	{
		$('.side_bar').animate(
		{
		width: '12%'
		}, 800, function() 
		{
			$('#open_close').text("Open");
		});
	}
});


$('.bg').click(function() {
	$(this).toggleClass('backgrounds_border');
	$(this).siblings().removeClass('backgrounds_border')
});



$('#update').click(function() {

	var newIntroText = $('#introText').val();
	var newIntroText2 = $('#introText2').val();
	var newIntroTextColor = $('#introTextColor').val();

	if (!newIntroText.length) {
		$('.hero_h1').text('Sidebar App!');
		}
		else {
			$('.hero_h1').text(newIntroText);
		}
	if (!newIntroText2.length) {
		$('.hero_h2').text('Check the sidebar on the right, and change the look of this page.')}
		else {
			$('.hero_h2').text(newIntroText2);
		}

		$('.hero_h1, .hero_h2').css('color', newIntroTextColor);

		for (i=0; i<backgrounds.length; i++) 
		{
			if ( $('.bg'+(i+1)).hasClass('backgrounds_border') ) 
			{
				$('header').css('background-image', 'url(' + backgrounds[i]+ ')')
			}    
		}



});



