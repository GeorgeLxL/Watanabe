$(function(){
    var flag = true;
    $(".sidebar-trigger").on("click", function() {
        $('.side-bar').addClass("is-show");
        $(this).toggleClass("is-show");
        $('body').toggleClass("sidebar-active");
        $(".flow-button").addClass("d-none");
        $(".flow-button").children().addClass("disappear");
        $(".flow-button").children().removeClass("appear");
    });
    $(".closebtn").on("click", function() {
        $('.side-bar').toggleClass("is-show");
        $(this).removeClass("is-show");
        $('body').removeClass("sidebar-active");
    });
    $("#trigger").on("click", function() {
        if (flag) {
            $("#trigger").toggleClass("change");
        } else {
            $("#trigger").toggleClass("change");
            $("#trigger").toggleClass("unchange");
        }
        setTimeout(function(){$("#trigger").toggleClass("touch"); }, 500);
        $(".flow-button").removeClass("d-none");
        $(".flow-button").children().toggleClass("appear");
        $(".flow-button").children().toggleClass("disappear");
        flag = false;
    });
    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

