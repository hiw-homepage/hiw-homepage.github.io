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
  $(".head").ready(function() {
    let n = window.navigator.userAgent.toLowerCase();
    n.indexOf("msie") != -1 || n.indexOf("trident") != -1 || n.indexOf("safari") != -1 ? $(".head").attr("src", "./image/group2.webp") : $(".head").attr("src", "./image/group2.avif")
  });
  $("label").ready(function() {
    let n = document.cookie.split("; ").find(n => n.startsWith("join")).split("=")[1];
    n == "submit" && Invalid()
  });
  $(document).on("click", "button", function() {
    $("input").prop("checked") == !0 && $("iframe").show()
  })