/*
  Version: 1.0
   Author: DaiAoki
   GitHub: https://github.com/DaiAoki
   README: https://github.com/DaiAoki/hogehoge
 Facebook: https://www.facebook.com/dai.aoki.94
  License: Copyleft(free to use)
*/

var currentItemNum = 0;
var itemLen;    //itemLen must be set after DOM rendering.
var imgSize;    //imgSize must be set after DOM rendering.

/* You can change these value in accordance with your application */
var targetHeight = "300px";
var targetWidth = "300px";
var visibleNum = 4.3;    //visibleNum means the number of carousel-item that can be seen in the slider.

$(function(){

  initialize();

  $(".carousel-item").click(function(){
    clearOpacity();
    setImageToTarget($(this));
  });

  $(".carousel-target-right").click(function(){
    clearOpacity();
    if(currentItemNum == itemLen){
      setImageToTarget($(".carousel-list :first"));
    }else{
      setImageToTarget($(".carousel-item").eq(currentItemNum+1));
    }
  });

  $(".carousel-target-left").click(function(){
    clearOpacity();
    if(currentItemNum == 0){
      setImageToTarget($(".carousel-item").eq(itemLen));
    }
    else{
      setImageToTarget($(".carousel-item").eq(currentItemNum-1));
    }
  });
});

function initialize(){
  itemLen = $(".carousel-item").length - 1;    //element number starts from 0, so must do -1
  imgSize = $(".carousel-list").parent().width() / visibleNum;
  initializeDOMs();
  $(".carousel-target > img").attr("src",$(".carousel-item img:first").attr("src"));
  $(".carousel-item img:first").css("opacity","0.4");
};

function initializeDOMs(){
  /* CSS settings */
  $(".carousel-target").css({
    "height": targetHeight,    // enable to change val at the beginning of the source code.
    "width": targetWidth,      // enable to change val at the beginning of the source code.
    "margin": "auto",
    "background-size": "cover",
    "position": "relative"
  });
  $(".carousel-list").css({
    "display": "table",
    "text-align": "center",
    "width": "100%",
    "padding-left": "0px"
  });
  $(".carousel-item").css({
    "display": "table-cell",
    "vertical-align": "middle"
  });
  $(".carousel-item > img").css({
    "width": imgSize,
    "height": imgSize
  });
  $(".carousel-list").parent().css({
    "overflow": "scroll"
  });

  /* create img and carousel-target-left/right */
  var img = $("<img>").css({
    "height": targetHeight,    // enable to change val at the beginning of the source code.
    "width": targetWidth       // enable to change val at the beginning of the source code.
  });
  var ctl = $("<div class='carousel-target-left'></div>").css({
    "position": "absolute",
    "height": "100%",
    "width": "50%",
    "top": "0",
    "left": "0"
  });
  var ctr = $("<div class='carousel-target-right'></div>").css({
    "position": "absolute",
    "height": "100%",
    "width": "50%",
    "top": "0",
    "right": "0"
  });
  $(".carousel-target").append(img);
  $(".carousel-target").append(ctl);
  $(".carousel-target").append(ctr);
};

function setImageToTarget(selectedItem){
  $(".carousel-target > img").attr("src", selectedItem.children().attr("src"));
  currentItemNum = selectedItem.index();
  selectedItem.children().css("opacity", "0.4");
  moveSelectedItemToCenter();
};

function clearOpacity(){
  $(".carousel-item").children().css("opacity","");
};

function moveSelectedItemToCenter(){
  var arrivalPoint = (imgSize * currentItemNum) - ($(".carousel-list").parent().width() / 2) + imgSize / 2;
  $(".carousel-list").parent().animate({scrollLeft: arrivalPoint}, 100, "linear");
};
