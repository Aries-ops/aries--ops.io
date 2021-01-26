//视频弹窗
(function (){
    var play = document.querySelector("#set .play"),
        shadow = document.querySelector(".shadow"),
        mvvm = document.querySelector(".mvvm"),
        close = document.querySelector(".close"),
        move = mvvm.innerHTML;
    // console.log(play,shadow,close,mvvm);
    play.onclick = function (){
        shadow.style.display = 'block';
        mvvm.innerHTML = move;
    };
    close.onclick = function (){
        shadow.style.display = "none";
        mvvm.innerHTML = '';
    };
})();

//选项卡
(function (){
    var li = document.querySelectorAll(".swiper li"),
        edition = document.querySelectorAll(".act div");
        // console.log(li,edition)
    function show(a){
        index = a;
        for(var h = 0; h < li.length; h++){
            // li[h].className = "";
            // edition[h].className = "";
            li[h].classList.remove('on');//classList 的集合
            edition[h].classList.remove('edition');
        }
            // li[index].className = "on";
            // edition[index].className = 'edition';
            li[this.index].classList.add('on');
            edition[this.index].classList.add('edition');
            
    }
    for(var i = 0; i < li.length; i++){
        li[i].index = i;
        li[i].onclick = function (){
            show(this.index);
        }
    }
})();

// 无缝轮播图
(function (){
    function car(id){
        var list = document.querySelector(id + " .wrap"),
            ul = document.querySelector(id + " ul"),
            left = document.querySelector(id + " .left"),
            right = document.querySelector(id + " .right"),
            pan = document.querySelectorAll(id + " .circle span");
            boxWidth = list.offsetWidth;

        ul.innerHTML += ul.innerHTML;
        var len = ul.children.length;
        ul.style.width = len*boxWidth + 'px';
        ul.style.transform = 'translateX(0px)';
        var can = true;
        var then = null;

        var cn = 0;//li当前索引值
        var ln = 0;//span当前索引值
        // 向右移动
        right.onclick = function (){
            if(!can){
                return;//条件成立说明现在图片正在走！！
            }
            cn++;
            move();
        }
        // 向左移动
        left.onclick = function (){
            if(!can){
                return;
            }
            if(cn == 0){
                cn = len / 2;
                ul.style.transition = null;
                ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';
            }
            setTimeout(function(){
                cn--;
                move();
            },13)
            
        }
        //圆点点击
        for(var i = 0; i < pan.length;i++){
            pan[i].index = i;
            pan[i].onclick = function (){
                if(!can){
                    return;
                }
                cn = this.index;
                move();
            }
        }
        // 自动滚动
        then = setInterval(right.onclick,3000);
        function move(){
            can = false;
            ul.style.transition = '.3s';
            ul.style.transform = 'translateX(' + -cn * boxWidth + 'px)';

            var hn = cn % (len/2);//圆点对应的索引值
            pan[ln].className = '';
            pan[hn].className = 'active';
            ln = hn;
        }
        ul.addEventListener('transitionend',function (){
            if(cn==len/2){
                cn=0;
                ul.style.transition = null;
                ul.style.transform = 'translate(0)';
                
            }
            can = true;
        })
    }
    car("#set2");
    car("#set4");
})();

// 新增场景
(function (){
    var ban = document.getElementById("set3"),
        boot = document.getElementsByClassName("bottom")[0],
        li = ban.querySelectorAll("#set3 li");
    // console.log(banne,botto,li);
    for(var i = 0;i < li.length;i++){
        li[i].index = i;
        li[i].onclick = function (){
            for(var h = 0; h < li.length; h++){
                li[h].classList.remove('active');
            }
            this.classList.add('active');
            ban.style.background = 'url(asster/img/set3-' + (this.index + 1) + '.jpg) no-repeat center top';
            boot.style.background = 'url(asster/img/bottom' + (this.index + 1) + '.png) no-repeat center top';
        }
    }
})();

//手风琴
(function (){
    var shou = document.querySelectorAll("#set6 ul li");
    // console.log(shou);
    for(var i = 0;i < shou.length; i++){
        shou[i].index = i;
        shou[i].onclick = function (){
            for(var h = 0;h < shou.length;h++){
                shou[h].classList.remove('active');
            }
                this.classList.add('active');
        }
    }
})();

// 不规则轮播图
(function (){
    var ul = document.querySelector("#set7 ul"),
        lis = ul.children,
        left = document.querySelector("#set7 .left"),
        right = document.querySelector("#set7 .right"),
        pan = document.querySelectorAll("#set7 .circle span"),
        cn = 0,
        ln = 0;
    right.onclick = function (){
        cn++;
        cn %= lis.length;

        ul.appendChild(lis[0]);//可向节点的子节点列表的末尾添加新的子节点。

        pan[ln].className = "";
        pan[cn].className = "active";

        ln = cn;
    }
    left.onclick = function (){
        cn--;
        if(cn < 0){
            cn = lis.length-1;
        }
        
        ul.insertBefore(lis[lis.length-1],lis[0]);//可在已有的子节点前插入一个新的子节点。

        pan[ln].className = "";
        pan[cn].className = "active";
        ln = cn;
    }
})();