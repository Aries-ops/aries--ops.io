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
      // li[h].className = "";
      // edition[h].className = "";
      li[h].classList.remove('on'); //classList 的集合

      edition[h].classList.remove('edition');
    } // li[index].className = "on";
    // edition[index].className = 'edition';


    li[this.index].classList.add('on');
    edition[this.index].classList.add('edition');
  }

  for (var i = 0; i < li.length; i++) {
    li[i].index = i;

    li[i].onclick = function () {
      show(this.index);
    };
  }
})(); // 轮播图


(function () {
  function car(id) {
    var list = document.querySelector(id + " .wrap"),
        ul = document.querySelector(id + " ul"),
        left = document.querySelector(id + " .left"),
        right = document.querySelector(id + " .right"),
        pan = document.querySelectorAll(id + " .circle span");
    boxWidth = list.offsetWidth; // console.log(list,left,right,pan,ul);

    ul.innerHTML += ul.innerHTML;
    var len = ul.children.length;
    ul.style.width = len * boxWidth + 'px';
    ul.style.transform = 'translateX(0px)';
    var cn = 0; //当前索引值

    var hn = 0;
    var ln = 0;

    right.onclick = function () {
      cn++;
      move();
    };

    left.onclick = function () {
      if (cn == 0) {
        cn = len / 2;
        ul.style.transition = null;
        ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';
      }

      setTimeout(function () {
        cn--;
        move();
      }, 13);
    };

    function move() {
      ul.style.transition = '.3s';
      ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';
      var hn = cn % (len / 2);
      pan[ln].className = '';
      pan[hn].className = 'active';
      ln = hn;
    }

    ul.addEventListener('transitionend', function () {
      if (cn == len / 2) {
        cn = 0;
        ul.style.transition = null;
        ul.style.transform = 'translate(0)';
      }
    });
  }

  car("#set2");
  car("#set4");
})(); // 新增场景


(function () {
  var banne = document.getElementById("set3"),
      botto = document.getElementsByClassName("bottom"),
      li = banne.querySelectorAll("#set3 li"); // console.log(banne,botto,li);

  for (var i = 0; i < li.length; i++) {
    li[i].index = i;

    li[i].onclick = function () {
      for (var h = 0; h < li.length; h++) {
        li[h].classList.remove('active');
      }

      this.classList.add('active');
      banne.style.background = 'url(asster/img/set3-' + (this.index + 1) + '.png) no-repeat center top';
      botto.style.background = 'url(asster/img/bottom' + (this.index + 1) + '.png) no-repeat center top';
    };
  }
})(); //手风琴


(function () {
  var shou = document.querySelectorAll("#set6 ul li"); // console.log(shou);

  for (var i = 0; i < shou.length; i++) {
    shou[i].index = i;

    shou[i].onclick = function () {
      for (var h = 0; h < shou.length; h++) {
        shou[h].classList.remove('active');
      }

      this.classList.add('active');
    };
  }
})();