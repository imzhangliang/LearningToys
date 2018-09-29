$(function(){
    console.log("OKK");

    $(".navbar-nav li a").click(function(){
        console.log("add");
        console.log($(this)[0]);
        $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
    })
});