var num = 1;

function changePic(idx) {
    if (idx) {
        if (num == 4) {     
            num = 0;
        }
        num++;
       

    } else {
        if (num == 1){
            num = 4;
        }
        num--;
    }
    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "images/main_img0"+num+".jpg")    
}

var imgArray = new Array();
imgArray[0] = "images/main_img01.jpg"
imgArray[1] = "images/main_img02.jpg"
imgArray[2] = "images/main_img03.jpg"
imgArray[3] = "images/main_img04.jpg"

function showImg() {
    var imgNum = Math.round(Math.random()*3);
    var objImg = document.getElementById("photo");
    objImg.src = imgArray[imgNum]

    setTimeout("showImg()", 7000);
}

function changeMainImg(idx) {
    if(idx == 1) {
        var imgTag = document.getElementById("photo");
        imgTag.setAttribute("src", "images/main_img01.jpg");    
    }
    else if(idx == 2) {
        var imgTag = document.getElementById("photo");
        imgTag.setAttribute("src", "images/main_img02.jpg");  
    }
    else if(idx == 3) {
        var imgTag = document.getElementById("photo");
        imgTag.setAttribute("src", "images/main_img03.jpg");  
    }
    else if(idx == 4) {
        var imgTag = document.getElementById("photo");
        imgTag.setAttribute("src", "images/main_img04.jpg");  
    }
}


// 수정할 부분
// Math random 함수를 사용해서 일정하게 나오는 것이 아니라 1-2-3-4 순서가 아니라 랜덤으로 나옴 (animate 사용해서 수정 필요)
// border-bottom 부분 부드럽게 나오도록 수정
// 사진 부드럽게 넘어가기 만들기
// 버튼 hover 이 아니라 버튼 클릭 시 img-change-menu의 색상을 변경하도록 수정