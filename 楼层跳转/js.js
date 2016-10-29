$(function(){
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
    				floor_lis[j].style.background='#fff';
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
        this.style.background='red';
    }
    floor_lis[i].onmouseout=function(){
        if(this.index==now){
            return;
        }
        this.style.background='#fff';
    }



    }
                  // 按钮点击变换楼层

})

