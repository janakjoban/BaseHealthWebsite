// headBar transition
$(window).on("scroll", function () {
    var privacyScroll = document.getElementById("privacyScroll");
    if ($(this).scrollTop() > 100) {
        privacyScroll.className = "content-document__chapters content-document__chapters_scroll";
    }
    else {
        privacyScroll.className = "content-document__chapters";
    }
});
