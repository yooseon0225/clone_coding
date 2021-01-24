// A.height() 알맹이
// A.innerHeight() padding
// A.outerHeight() border
// A.outerHeight(true) margin


// $()함수는 괄호안에 CSS선택자를 정의해서 DOM노드(element)를 반환합니다. 하나의 함수로 여러가지의 종류의 객체를 생성할 수 있는 팩토리함수입니다.

$(function(){
    var $firstMenu = $('menu-text'),
    $header = $('header'),
    $headerHeight = $header.outerHeight();

    $firstMenu.mouseenter(function(){
        var subHeight = $(this).find('ul').outerHeight(); 
        //자식의 border의 높이를 구해옴
        $header.stop().animate({height: $headerHeight + subHeight + 'px'},300);
        //원래의 header 높이와 구해온 menu의 높이를 더해서 0.3초에 걸쳐 나오게 함
    })
    .mouseleave(function(){
        $header.stop().animate({height: $headerHeight + 'px'},300);
    });
     
});

