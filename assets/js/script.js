$(document).ready(function () {

    $('.tabs .tab-links a').on('click', function (event) {
        var currentTab = $(this).attr('href');
        $('.tabs ' + currentTab).show().siblings().hide();

        // $('.tabs ' + currentTab).siblings().slideUp(400);
        // $('.tabs ' + currentTab).delay(400).slideDown(400).show();

        // $('.tabs ' + currentTab).fadeIn(400).siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        event.preventDefault();
    })

})

$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
    }
    else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");

    }
});