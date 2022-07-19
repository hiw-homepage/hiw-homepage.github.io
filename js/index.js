let link_click = 0;
// $(document).on("click", "#search", function() {
// 	$(".search").css({
// 		display: "flex"
// 	});
// 	$("#search").attr("id", "close");
// 	$("#img").attr("src", "./image/close.svg")
// });
// $(document).on("click", "#close", function() {
// 	$(".search").css({
// 		display: "none"
// 	});
// 	$("#close").attr("id", "search");
// 	$("#img").attr("src", "./image/search.svg")
// });
$(document).on('click', '#link', function() {
	if (link_click == 0) {
		// $('#detail').css('display', 'block');
		$('#detail').attr('class', 'detail')
		$('body, header').attr('class', 'body')
		$('.search').attr('class', 'search iframe')
		$('body').css({
			'width': 'calc(100% - 256px)',
			'position': 'relative',
			'left': '256px'
		});
		$('header').css({
			'width': 'calc(100% - 256px)',
			'left': '256px'
		});
		$('.search').css({
			'width': 'calc(100% - 256px)',
			'margin-left': '256px',
			'margin-right': '0',
			'left': '0'
		});
		$('#fixed h1').css('display', 'block')
		$('#link_button').attr('src', './image/close.svg');
		setTimeout(function(){
			$('#fixed h1').css('background', 'linear-gradient(to bottom, white 62.5%, transparent 100%)')
	   }, 300);
		link_click = 1;
	} else if (link_click == 1) {
		$('#detail').removeAttr('class')
		$('#fixed h1').css('background', 'transparent')
		$('body, header').removeAttr('class')
		$('.search').removeAttr('class', 'iframe')
		$('body').css({
			'width': '100%',
			'position': 'static'
		});
		$('header').css({
			'width': '100%',
			'left': '0',
			'padding-left': '0'
		});
		$('.search').css({
			'width': '100vw',
			'margin-left': '0',
			'margin-right': '0',
			'left': '0'
		});
		$('#fixed h1').css('display', 'none')
		link_click = 0;
		$('#link_button').attr('src', './image/link.svg');
	}
});
window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-MRPYCLR233');