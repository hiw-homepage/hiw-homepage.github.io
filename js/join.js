function IFrameHide() {
	$("iframe").hide()
}

function Invalid() {
	$("#agree").attr("disabled", "disabled");
	$("label").css({
		color: "rgba(0, 0, 0, .5)",
		cursor: "not-allowed"
	});
	$("button").text("複数の回答はできません");
	$("button").css("cursor", "not-allowed")
}
$("label").ready(function() {
	let n = document.cookie.split("; ").find(n => n.startsWith("join")).split("=")[1];
	n == "submit" && Invalid()
});
$(document).on("click", "button", function() {
	$("input").prop("checked") == !0 && $("iframe").show()
})