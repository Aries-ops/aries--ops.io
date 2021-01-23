"use strict";

//视频弹窗
(function () {
  var play = document.querySelector("#set .play"),
      shadow = document.querySelector(".shadow"),
      mvvm = document.querySelector(".mvvm"),
      close = document.querySelector(".close"),
      move = mvvm.innerHTML; // console.log(play,shadow,close,mvvm);

  play.onclick = function () {
    shadow.style.display = 'block';
    mvvm.innerHTML = move;
  };

  close.onclick = function () {
    shadow.style.display = "none";
    mvvm.innerHTML = '';
  };
})(); //选项卡


(function () {
  var li = document.querySelectorAll(".swiper li"),
      edition = document.querySelectorAll(".act div"); // console.log(li,edition)

  function show(a) {
    index = a;

    for (var h = 0; h < li.length; h++) {
      li[h].className = "";
      edition[h].className = "";
    }

    li[index].className = "on";
    edition[index].className = 'edition';
  }

  for (var i = 0; i < li.length; i++) {
    li[i].index = i;

    li[i].onclick = function () {
      show(this.index);
    };
  }
})(); // 轮播图


(function () {})();