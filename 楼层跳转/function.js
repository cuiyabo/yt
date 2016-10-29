 //获取某个标签类名的兼容性
function getClass(classname,obj){
    //输入类名与所在的相应的文档
    var obj=obj||document;
    //将输入的文档初始化；
    if(obj.getElementsByClassName){
        //如果文档obj里含有该类名
    	return obj.getElementsByClassName(classname);
        // 将文档的类名返回出去
    }else{
        // 如果不能识别该类名
    	var arr=[];
    	var objs=obj.getElementsByTagName("*");
        // 选择document里的所有的标签
    	for(var i=0;i<objs.length;i++){
            //将该标签一一遍历一下
            var dom=checkClass(classname,objs[i]);
            //定义变量dom
    		if(dom==true){
                //选出与所需标签类名相同的标签
                arr.push(objs[i])
                // 将所需的标签放入一数组里
    		}
    	}
    	 return arr;
         // 将数组arr返回出去
    }
}
 function checkClass(val,obj){
    //接受传入的实参
    var str=obj.className;
    //将obj里的所有类名赋值给str
    var brr=str.split(" ");
    //将字符串转化为数组
    for(var j=0;j<brr.length;j++){
        //遍历该数组
           if(brr[j]==val){
            //判断该数组里的某个值是不是所需的类名
            return true;
           }
    }
     return false;
 }
//获取样式
function getStyle(obj,style){
   if(obj.currentStyle){
        return obj.currentStyle[style];
    }else{
        return getComputedStyle(obj,null)[style]
    }
}
//获取内容
function operateText(obj,val){
    if(val==undefined){
        if(obj.innerText){
           return obj.innerText;
        }else{
           return obj.textContect;
        }
    }else{
        if(obj.innerText){
           return obj.innerText=val;
        }else{
           return obj.textContect=val;
        }
    }
}
//获取元素
function $(val,obj){
    if(typeof val=="string"){
        obj=obj||document;
        val=val.replace(/^\s*|\s*$/g,"");
        if(val.charAt(0)=="#"){
        return document.getElementById(val.slice(1));
        }else if(val.charAt(0)=="."){
            return getClass(val.slice(1),obj);
        }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}/.test(val)){
            return obj.getElementsByTagName(val)
        }
    }else if(typeof val=="function"){
        window.onload=function(){
            val();  
        }
    }
}


// 获得子节点
// {数组的形式输出}
function getChilds(obj,type){
    // 输出所有节点   
    // 获取对象obj
    var type=type||"no";
    // 参数初始化
    var kids=obj.childNodes;
    // 获取该对象的所有子节点
    var arr=[];
    for(var i=0;i<kids.length;i++){
    if(type=='no'){

      if(kids[i].nodeType=="1"){
        arr.push(kids[i]);
      }
    }else if(type=='yes'){
      if(kids[i].nodeType=="1"||kids[i].nodeType==3&&kids[i].nodeValue.replace(/^\s*|\*$/g,"")){
        arr.push(kids[i]);
    }
  }
}
 return arr;

}




  // no只输出元素节点，yes只输出文本节点与元素节点
function getFirst(obj,type){
//{ 获取第一个子节点}
    var type=type||"no";
    
    return getChilds(obj,type)[0];
//     // 拿到所有子节点
//     // return getChilds(obj,"no")[0];
//     // }else if(type=="yes"){
//     // return getChilds(obj,"yes")[0];  
//     // }
//     // var kids=getrChilds(obj,);



}
function getLast(obj,type){
    // {获取最后一个子节点}
    var type=type||"no"
    var childs=getChilds(obj,type)
    return childs[childs.length-1]
}

function getN(obj,n,type){
    // {输出第几个}
    var type=type||"no";
    // no只输出元素节点，yes只输出文本节点与元素节点
    var childs=getChilds(obj,type);
    if(n>childs.length||n<1){
        return false;
    }
    return childs[n-1]
}



// 取兄弟节点
// obj.nextSibling  下一个兄弟节点
  // no只输出元素节点，yes只输出文本节点与元素节点


  // 上一个兄弟节点
  // yes下一个div或者是文本，哪个在前输出哪个
  // no下一个div，不会输出文本
function getPrevious(obj,type){
    var type=type||"no";
    var Previous=obj.previousSibling;
    if(Previous===null){
        return false;
    }
    if(type=='no'){
        while(Previous.nodeType==3||Previous.nodeType==8){
            Previous=Previous.previousSibling;
            if(Previous==null){
                return false;
            }
        }
        return Previous;
    }else if(type=='yes'){
        while(Previous.nodeType==3&&!Previous.nodeValue.replace(/^\s*|\*$/g,"")||Previous.nodeType==8){
            Previous=Previous.nextSibling;
            if(Previous==null){
                return false;
            }
        }
        return Previous;
    }
}
// 下一个兄弟节点
// yes下一个div或者是文本，哪个在前输出哪个
  // no下一个div，不会输出文本
function getNext(obj,type){
// 方程函数名  接受对象，要不要文本 
    var type=type||"no";
    // 参数初始化  输入啥接受啥  默认接受元素节点
    var next=obj.nextSibling;
    //   变量       输入的该对象的下一个兄弟节点的引用
    if(next===null){
        // 如果下一个兄弟没有值
        return false;
        // 结束函数 返回false
    }
    if(type=='no'){
        // 如果有值 并且不是文本
        while(next.nodeType==3||next.nodeType==8){
// 判断条件 是否满足条件  当满足文本节点和注释节点的时候
            next=next.nextSibling;
            // 对象的兄弟节点 赋值给next
            if(next==null){
                return false;
            }
            // 一直检查它的下一个的元素节点 知道检查完为止
        }
        return next;
        // 返回出去
    }else if(type=='yes'){
        // 需要文本的话
        while(next.nodeType==3&&!next.nodeValue.replace(/^\s*|\*$/g,"")||next.nodeType==8){
           // 判断节点等于3它就是文本节点、
            next=next.nextSibling;
            // 对象的兄弟节点 赋值给next
            if(next==null){
                return false;
            }
            // 输出false
        }
        return next;
        // 结果
    }
}

// 插入之前
function insertBefore(obj,beforeObj){
   var box=beforeObj.parentNode;
   parent.insertBefore(obj,beforeObj);
 
}

// 插入之后
function insertAfter(obj,afterObj){
  var box=afterObj.parentNode;
  var next=getNext(afterObj,'yes');
  if(!next){
    parent.appendChild(obj);
  }else{
    parent.insertBefore(obj,next);
  }
}













