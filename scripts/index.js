$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("body").animate({scrollTop: $(_href).offset().top-"px"});
    });
});
