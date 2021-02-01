var now_img;
var last_img;

window.onload = function(){
    setInterval("fn_change()",2000);
}

function fn_change(){
    now_img = $("img").eq(0);
    last_img = $("img").eq(-1);

    last_img.addClass("z-idx").css("opacity",0)
}