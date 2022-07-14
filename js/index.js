let link_click = 0;
$(document).on("click", "#search", function() {
	$(".search").css({
		display: "flex"
	});
	$("#search").attr("id", "close");
	$("#img").attr("src", "./image/close.svg")
});
$(document).on("click", "#close", function() {
	$(".search").css({
		display: "none"
	});
	$("#close").attr("id", "search");
	$("#img").attr("src", "./image/search.svg")
});
$(document).on('click', '#link', function() {
	if (link_click == 0) {
		$('#detail').css('display', 'block');
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
		link_click = 1;
	} else if (link_click == 1) {
		$('#detail').hide();
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