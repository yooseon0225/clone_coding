// A.height() 알맹이
// A.innerHeight() padding
// A.outerHeight() border
// A.outerHeight(true) margin


// $()함수는 괄호안에 CSS선택자를 정의해서 DOM노드(element)를 반환합니다. 하나의 함수로 여러가지의 종류의 객체를 생성할 수 있는 팩토리함수입니다.

$(function(){
    var $firstMenu = $('.menu-box > ul > li'),
    $header = $('header')
    $headerHeight = $header.outerHeight();

    $firstMenu.mouseenter(function(){
        var subHeight = $(this).find('ul').outerHeight();
        $header.animate({height: $headerHeight + subHeight + 'px'},300);
    })
    .mouseleave(function(){
        $header.animate({height: $headerHeight + 'px'},300);
    })
     
});

