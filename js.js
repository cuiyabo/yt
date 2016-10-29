$(function(){
    var aa=jQuery.noConflict();
    // // aa(function() {
    aa("img").lazyload({
        threshold:300,
        event:'scroll',
        effect:'fadeIn',
    });
// banner
aa(function() {
    aa("img").lazyload({
        event : "sporty"
    });
});

aa(window).bind("load", function() {
    var timeout = setTimeout(function() { aa("img").trigger("sporty") }, 2000);
});      


function nodelunbo(c){
        var center=c;
        // console.log(center)
        var imgs=$(".picture",center)
        // console.log(imgs)
        var circle=$(".circle-list",center)
        var left=$(".banner-left",center)[0]
        var right=$(".banner-right",center)[0]
        var n=0;
        var flag=true;
        var t=setInterval(move,2000)
        function move(){
            // next=n+1;
            if(n>=imgs.length){
                n=0;
            }
            for(var i=0;i<imgs.length;i++){
                for(var j=0;j<imgs.length;j++){
                    circle[j].style.background="#3E3E3E"
                    animate(imgs[j],{opacity:0},600);
                }
                circle[n].style.background="#B61B1F"
                animate(imgs[n],{opacity:1},600,function(){

                });
            }
            n++;
        }
        center.onmouseover=function(){
            clearInterval(t);
            left.style.display="block"
            right.style.display="block"
        }
        center.onmouseout=function(){
            t=setInterval(move,2000)
            left.style.display="none"
            right.style.display="none"
        }
        for(var i=0;i<circle.length;i++){
            circle[i].index=i;
            circle[i].onmouseover=function(){
                for(var i=0;i<circle.length;i++){
                    circle[i].style.background="#3E3E3E"
                    animate(imgs[i],{opacity:0},600)
                }
                this.style.background="#B61B1F"
                animate(imgs[this.index],{opacity:1},600)
                n=this.index
            }
        }
        right.onclick=function(){
            move();
        }
        left.onclick=function(){
            // next=n-1;s
            if(n<0){
                n=imgs.length-1;
            }
            for(var i=0;i<imgs.length;i++){
                for(var j=0;j<imgs.length;j++){
                    circle[j].style.background="#3E3E3E"
                    animate(imgs[j],{opacity:0},600)
                }
                    circle[n].style.background="#B61B1F"
                    animate(imgs[n],{opacity:1},600)
            }
            n--;
        }

    }

    nodelunbo($("#center"))
















// 线

function border(a,b){
    var xian=$('.ttright-a')[b];
    var xiantop=$('.xian-top')[a];
    var xianbottom=$('.xian-bottom')[a];
    var xianleft=$('.xian-left')[a];
    var xianright=$('.xian-right')[a];
    var widthtop=xian.offsetWidth;
    var heighttop=xian.offsetHeight;

        xian.onmouseover=function(){
            // xiantop.style.width=widthtop+'px';
            animate(xiantop,{width:widthtop})
            animate(xianbottom,{width:widthtop})
            animate(xianleft,{height:heighttop})
            animate(xianright,{height:heighttop})
    }
        xian.onmouseout=function(){
            animate(xiantop,{width:0})
            animate(xianbottom,{width:0})
            animate(xianleft,{height:0})
            animate(xianright,{height:0})
    }
}
border(0,0);
border(1,1);
border(2,2);
border(3,3);
border(4,4);
border(5,5);
border(6,6);
border(7,7);
border(8,8);
border(9,9);
border(10,10);
border(11,11);
border(12,12);
border(13,13);
border(14,14);
border(15,15);
border(16,16);
border(17,17);
border(18,18);
border(19,19);
border(20,20);
border(21,21);
border(22,22);
border(23,23);
border(24,24);
border(25,25);
border(26,26);
border(27,27);
border(28,28);
border(29,29);
border(30,30);
border(31,31);
border(32,32);
border(33,33);
border(34,34);
border(35,35);
border(35,35);




    
        








    // 选项卡
    var boxtopb=$('.zgui-c-a-a')
    var boxtopc=$('.zgui-c-a-b')
    for(var c=0;c<boxtopb.length;c++){
        boxtopb[c].index=c;
        boxtopb[c].onmouseover=function(){
            for(var d=0;d<boxtopb.length;d++){
            boxtopb[d].style.background='#fff';
            boxtopc[d].style.display='none'

            }
            this.style.background='#fff';
            boxtopc[this.index].style.display='block'
        }
    

    }





     var boxtop=$('.boxtop-a')
    var boxtopa=$('.boxtop-b')
    for(var a=0;a<boxtop.length;a++){
        boxtop[a].index=a;
        boxtop[a].onmouseover=function(){
            for(var b=0;b<boxtop.length;b++){
            boxtop[b].style.background='#ccc';
            boxtopa[b].style.display='none'

            }
            this.style.background='pink';
            boxtopa[this.index].style.display='block'
        }
        // boxtop[i].onmouseout=function(){
        //  this.style.background='pink';
        //  boxtopa[this.index].style.display='none'

        // }

    }












    var top_hidden=$('#top-hidden');
    var floor_nav=$('.floor-nav')[0];
    var floor_lis=$('.floor-lis')
    var floor=$('.floor');
    var now;
    var cHeight=document.documentElement.clientHeight; 

    // console.log(top_hidden,floor_nav,floor_lis,floor,cHeight,nHeight)

 
    
    for(var i=0;i<floor.length;i++){
    	floor[i].h=floor[i].offsetTop;
        // console.log(floor[i].h)楼层的高度存起来
    }
    window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
    	var top=obj.scrollTop;
    	if(top>=floor[0].h-300){
    		floor_nav.style.display='block';

            var nHeight=floor_nav.offsetHeight;
            // 获取本身的高度
            floor_nav.style.top=(cHeight-nHeight)/2+"px";
            // 垂直居中

    		// console.log(top)滚动出值
            // 出效果：左框出来
    	}
        if(top<floor[0].h-200){
            floor_nav.style.display='none'
        }
    	for(var i=0;i<floor.length;i++){
    		if(top>=floor[i].h-600){
    			for(var j=0;j<floor_lis.length;j++){
    				floor_lis[j].style.background='#CCCCCC';
    			}
    			floor_lis[i].style.background='red';
                now=i;
    		}    
    	}
    }          //整个楼层出效果
    	for(var i=0;i<floor.length;i++){
    		floor_lis[i].index=i;
    		floor_lis[i].onclick=function(){
    			animate(document.body,{scrollTop:floor[this.index].h})
                now=this.index;
    			animate(document.documentElement,{scrollTop:floor[this.index].h})
    		
    	}
    floor_lis[i].onmouseover=function(){
        this.style.background='#CCCCCC';
    }
    floor_lis[i].onmouseout=function(){
        if(this.index==now){
            return;
        }
        this.style.background='red';
    }



    }
                  // 按钮点击变换楼层


                  // 顶部导航
var boxa=$(".zi-a-a")[0]
    
        boxa.onmouseover=function(){

            this.style.background="#fff"
            var ewma=$(".zi-a-a-b")[0]
            // console.dir(ewma)
            ewma.style.display="block"
        }
        boxa.onmouseout=function(){
            this.style.background="#EEEEEE"
            var ewma=$(".zi-a-a-b")[0]
            ewma.style.display="none"
        }

var boxa=$(".zi-a-b")[0]
    
        boxa.onmouseover=function(){

            this.style.background="#fff"
            var ewma=$(".zi-a-a-c")[0]
            // console.dir(ewma)
            ewma.style.display="block"
        }
        boxa.onmouseout=function(){
            this.style.background="#EEEEEE"
            var ewma=$(".zi-a-a-c")[0]
            ewma.style.display="none"
        }
var boxa=$(".top-b-a-aa")[0]
    
        boxa.onmouseover=function(){

            this.style.background="#fff"
            var ewma=$(".top-b-a-a")[0]
            // console.dir(ewma)
            ewma.style.display="block"
            // this.style.textDecoration="underline"s

        }
        boxa.onmouseout=function(){
            this.style.background="#EEEEEE"
            var ewma=$(".top-b-a-a")[0]
            ewma.style.display="none"

        }


// banner效果
var boxa=$(".dingwei-a-a-a")[0]
    
        boxa.onmouseover=function(){

            this.style.background="#red"
            var ewma=$(".dingwei-a-a-b")[0]
            // console.dir(ewma)
            ewma.style.display="block"
            // this.style.textDecoration="underline"s

        }
        boxa.onmouseout=function(){
            this.style.background="#000"
            var ewma=$(".dingwei-a-a-b")[0]
            ewma.style.display="none"

        }




var boxa=$(".dingwei-a")
    for(var i=0;i<boxa.length;i++){
        boxa[i].onmouseover=function(){

            // this.style.background="#fff"
            var ewmaa=$(".dingwei-a-b-b",this)[0]
            // console.dir(ewma)
            ewmaa.style.display="block"
        }
        boxa[i].onmouseout=function(){
            // this.style.background="#C81623"
            var ewmaa=$(".dingwei-a-b-b",this)[0]
            ewmaa.style.display="none"
        }

    }
      

var boxa=$(".dingwei-b")[0]
    
        boxa.onmouseover=function(){

            this.style.background="#red"
            var ewma=$(".dingwei-a-b-b")[0]
            // console.dir(ewma)
            ewma.style.display="block"
            // this.style.textDecoration="underline"s

        }
        boxa.onmouseout=function(){
            this.style.background="#000"
            var ewma=$(".dingwei-a-b-b")[0]
            ewma.style.display="none"

        }  

    var banneraa=$('#banner-centerin')
    var imgs=getClass('banner-center');
    var list=getClass('lis');
    var box=document.getElementById('banner-centerin');
    var width=parseInt(getStyle(banneraa,"width"));
    var Left=getClass('btn-left')[0];
    var right=getClass('btn-right')[0];
    var now=0;//当前第一张
    var next=0;//第二张
    var flag=true;
    var tt=setInterval(fun,1500);//时间函数
    function fun(){
        next=now+1;//下一张=当前第一张+1
        if(next>=imgs.length){//当大于图片的长度时，再返回第一张；
            next=0;
        }
        imgs[next].style.left=width+'px';//让下一张在当前的图片后等待
        
        animate(imgs[now],{left:-width},300);//让当前图片向左移出当前位置
        animate(imgs[next],{left:0},300);//让下一张图片移到当前位置
        list[now].style.background='#ccc';//让当前图片所对应的小点变回默认色
        list[next].style.background='red';//下一张就是默认的小点的颜色
        now=next;
    }

    banneraa.onmouseover=function(){
        clearInterval(tt);
    }
    banneraa.onmouseout=function(){
        tt=setInterval(fun,1500)
    }
    right.onclick=function(){
        fun();
    }
    Left.onclick=function(){
        next=now-1;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-width+'px';
        animate(imgs[now],{left:width},300);
        animate(imgs[next],{left:0},300);
        list[now].style.background='#ccc';
        list[next].style.background='red';
        now=next;
    }
    for(i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onclick=function(){
            if(this.index>now){
                imgs[this.index].style.left=width+'px';
                animate(imgs[now],{left:-width},300);
            }else if(this.index<now){
                imgs[this.index].style.left=-width+'px';
                animate(imgs[now],{left:width},300);
            }
            animate(imgs[this.index],{left:0},300);
            list[now].style.background='#ccc';
            list[this.index].style.background='red';
            now=this.index;
        }
    }





    var boxa=$("#banner");
    var imga=$(".img");
    var lisa=$(".lis");
    var lefta=$(".banner-left")[0];
    var widtha=parseInt(getStyle(boxa,"width"));
    var righta=$(".banner-right")[0];
    var a=0;
    var next=0;
    var tt=setInterval(move,2000);
    function move(){
        next=a+1;
        if(next>=imga.length){
            next=0;
        }
        imga[next].style.left=widtha+"px";
        animate(imga[a],{lefta:-widtha},600);
        animate(imga[next],{lefta:0},600);
        for(var l=0;l<lisa.length;l++){
            lisa[l].style.background="#fff";
        }
        a=next;
    }
    righta.onclick=function(){
        move();
    }
    lefta.onclick=function(){
        next=a-1;
        if(next<0){
            next=imga.length-1;
        }
        imga[next].style.left=-widtha+"px";
        animate(imga[a],{lefta:widtha},600);
        animate(imga[next],{lefta:0},600);
        for(var l=0;l<lisa.length;l++){
            lisa[l].style.background="#fff";
        }
        lisa[next].style.background="red";
        a=next;
    }
    boxa.onmouseover=function(){
        clearInterval(tt);
    }
    boxa.onmouseout=function(){
        tt=setInterval(move,2000);
    }
    for(var l=0;l<lisa.length;l++){
        lisa[l].index=l;
        lisa[l].onclick=function(){
            if(this.index>a){
                imga[this.index].style.left=widtha+"px";
                animate(imga[a],{lefta:-widtha},600);
                animate(imga[this.index],{lefta:0},600);
                for(var l=0;l<lisa.length;l++){
                    lisa[l].style.background="#fff";
                }
                lisa[this.index].style.background="red";
                a=next;
            }else if(this.index<a){
                imga[this.index].style.left=-widtha+"px";
                animate(imga[a],{lefta:widtha},600);
                animate(imga[this.index],{lefta:0},600);
                for(var l=0;l<lisa.length;l++){
                    lisa[l].style.background="#fff";
                }
                lisa[this.index].style.background="red";
            }
            a=this.index;
            next=this.index;
        }
    }











function com(obj){
    var box=obj;
    var img=$('.img',box);
    var lit=$('.lits',box);
    var left=$('.left',box)[0];
    var right=$('.right',box)[0];
    // console.log(box[0])
    var width=parseInt(getStyle(box,'width'));
    
    var next=0;
    var n=0;
    var flag=true;

    var t=setInterval(move,2000);
    function move(){
        if(!flag){
            return;
        }
        flag=false
        next=n+1

        if(next>=img.length){
            next=0;
        }
        img[next].style.left=width+'px';
        animate(img[n],{left:-600},600);
        animate(img[next],{left:0},600,function(){
            flag=true
        });
        lit[n].style.background='#ccc'
        lit[next].style.background='orange'
        n=next;
    }
    box.onmouseover=function(){
        clearInterval(t)
    }
    box.onmouseout=function(){
        t=setInterval(move,2000)
    }
    right.onclick=function(){
        move();
    }
    left.onclick=function(){
        if(!flag){
            return;
        }
        flag=true;
        next=n-1;
        if(next<0){
            next=img.length-1;
        }
        img[next].style.left=-width+'px';
        animate(img[n],{left:600},600);
        animate(img[next],{left:0},600,function(){
            flag=true;
        });
        lit[n].style.background='#ccc'
        lit[next].style.background='orange'
        n=next;
    }

    for(var i=0;i<lit.length;i++){
        lit[i].index=i;
        lit[i].onclick=function(){
            if(this.index>n){
                if(!flag){
                    return;
                }
                flag=true;
                img[this.index].style.left=width+'px';
                animate(img[n],{left:-600},600);
                animate(img[this.index],{left:0},600,function(){
                    flag=true
                });
                lit[n].style.background='#ccc'
                lit[this.index].style.background='orange'
                n=this.index;
            }else if(this.index<n){
                if(!flag){
                    return;
                }
                flag=true;
                img[this.index].style.left=-width+'px';
                animate(img[n],{left:600},600);
                animate(img[this.index],{left:0},600,function(){
                    flag=true;
                });
                lit[n].style.background='#ccc'
                lit[this.index].style.background='orange'
                n=this.index;
            }
        }
    }
    }
    com($('.flass-tu')[0])
    // console.log($('.flass-tu')[0]);
    com($('.flass-tu')[1])
    com($('.flass-tu')[2])
    com($('.flass-tu')[3])
    com($('.flass-tu')[4])
    com($('.flass-tu')[5])
    com($('.flass-tu')[6])
    com($('.flass-tu')[7])
    com($('.flass-tu')[8])
    com($('.flass-tu')[9])





   // 线
   

// });


})

