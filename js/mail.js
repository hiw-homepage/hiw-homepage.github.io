function IFrameHide() {
	$("iframe").hide()
}

function OnSubmit() {
	$("#submit").html('<button type="submit" disabled>送信済み<\/button>')
}
$("#ua").ready(function() {
	$(document).on("click", "button", function() {
		$("input").prop("checked") == !0 && $("iframe").show()
	});
	n = window.navigator.userAgent.toLowerCase();
	n.indexOf("msie") != -1 || n.indexOf("trident") != -1 ? $(".browser").val("Internet Explorer") : n.indexOf("edg") != -1 || n.indexOf("edge") != -1 ? $(".browser").val("Edge") : n.indexOf("opr") != -1 || n.indexOf("opera") != -1 ? $(".browser").val("Opera") : n.indexOf("chrome") != -1 ? n.indexOf("samsungbrowser") != -1 ? $(".browser").val("Samsung Internet") : $(".browser").val("Chrome") : n.indexOf("safari") != -1 ? $(".browser").val("Safari") : n.indexOf("firefox") != -1 ? $(".browser").val("Firefox") : (n.indexOf("opr") != -1 || n.indexOf("opera") != -1) && $(".browser").val("Opera")
})