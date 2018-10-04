$(function(){
    console.log("OKK");

    $(".navbar-nav li:not(.dropdown) a").click(function(){
        console.log("add");
        console.log($(this)[0]);
        $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
    })

});