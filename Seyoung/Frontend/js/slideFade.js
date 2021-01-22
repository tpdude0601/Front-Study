$(document).ready(function() {
    $("img:gt(0)").hide();

    setInterval(function() {
        $("img:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slide");
    }, 2000);

});