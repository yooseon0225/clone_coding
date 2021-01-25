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

    setTimeout("showImg()", 8000);
}