/*敌方小飞机的创建---start*/
var mainObj=document.getElementById("main");
var smallPlaneArray=[];
var bulletArray=[];//子弹数组
var leftBtn=false;//按键开关
var upBtn=false;
var rightBtn=false;
var downBtn=false;
var shootBtn=false;//子弹发射状态
//杀敌数量
var killNum=document.getElementById("killNum");
//分数
var killScore=document.getElementById("killScore");
var startmusic=document.getElementById("startmusic");
var zdmusic=document.getElementById("zdmusic");
startmusic.play();
var  player=new playerPlaneProto("images/b.jpg",50,500,10);
var  smallPlaneTimer=setInterval( createSmallPlane,1000);//创建小飞机
var  smallPlaneMoveTimer=setInterval(smallPlaneMove,50);//小飞机移动
var  ctrlPlayTimer=setInterval(ctrlPlay,30);//30毫秒监听一次是否按下键盘
var  bulletMoveTimer=setInterval(bulletMove,10);//子弹移动
var  crashCheckTimer=setInterval( crashCheck,50);//判断碰撞

//界面
 var stop=document.getElementById("stop");
//暂停游戏
function mystopgame(){
	 stop.style.display="block";
	 clearInterval(smallPlaneTimer);
	 clearInterval(smallPlaneMoveTimer);
	 clearInterval(bulletMoveTimer);
	 clearInterval(crashCheckTimer);
	 startmusic.pause();
	 zdmusic.pause();
}
//继续游戏
function continuegame(){
	   stop.style.display="none";
       smallPlaneTimer=setInterval( createSmallPlane,1000);
       smallPlaneMoveTimer=setInterval(smallPlaneMove,50);
       ctrlPlayTimer=setInterval(ctrlPlay,30);
       bulletMoveTimer=setInterval(bulletMove,10);
       crashCheckTimer=setInterval( crashCheck,50);
       startmusic.play();
	   
}
//新游戏
function newgame(){
      stop.style.display="none";
      mainObj.removeChild(player.imgNode);
	  player=null;
	  for(var i=0;i<smallPlaneArray.length;i++){
		   mainObj.removeChild(smallPlaneArray[i].imgNode);
		  }
	  smallPlaneArray.splice(0,smallPlaneArray.length);
	   for(var i=0;i<bulletArray.length;i++){
		   	  mainObj.removeChild(bulletArray.imgNode);
		  }
	   bulletArray.splice(0,bulletArray.length);
	   killNum.innerHTML=0;
	   killScore.innerHTML=0;
	   smallPlaneTimer=setInterval( createSmallPlane,1000);
       smallPlaneMoveTimer=setInterval(smallPlaneMove,50);
       ctrlPlayTimer=setInterval(ctrlPlay,30);
       bulletMoveTimer=setInterval(bulletMove,10);
       crashCheckTimer=setInterval( crashCheck,50);
       startmusic.play();
	   zdmusic.play();
	   player=new playerPlaneProto("images/b.jpg",50,500,10);
}

function SmallPlaneProto(imgSrc,x,y,speed){
this.imgNode=document.createElement("img");//创建结点
	this.imgSrc=imgSrc;
	this.x=x;
	this.y=y;
	this.isDead=false;//地方小飞机存活状态
	this.exTime=30;//敌方小飞机死亡倒计时
	this.speed=speed;
	this.init=function(){/*初始化的方法*/
	     this.imgNode.src=this.imgSrc;
	     this.imgNode.style.position="absolute";
	     this.imgNode.style.left=this.x+"px";
		 this.imgNode.style.top=this.y+"px";
		 mainObj.appendChild(this.imgNode);//添加到舞台当中
        }
		this.init();
	     this.move=function(){
		   this.imgNode.style.top=parseInt(this.imgNode.style.top)+this.speed+"px";//小飞机的位置坐标
		
	}
}
function createSmallPlane(){
    var smallPlane=new SmallPlaneProto("images/p.jpg",parseInt(Math.random()*350),-parseInt(Math.random()*100+40),parseInt(Math.random()*10)+1);
	smallPlaneArray.push(smallPlane);
}  

//敌方小飞机移动
function smallPlaneMove(){
   for(var i=0;i<smallPlaneArray.length;i++){
	     if(smallPlaneArray[i].isDead==false){
		   //活着时才有移动的方法
	      smallPlaneArray[i].move();
		     if(parseInt(smallPlaneArray[i].imgNode.style.top)>=600){
			 mainObj.removeChild( smallPlaneArray[i].imgNode);
			  smallPlaneArray.splice(i,1);
		   }
		 }else{
			  //死亡
			 //倒计时
			 //死亡是，倒计时每隔50毫秒，从30减少到0的时当前候销毁小飞机
			 smallPlaneArray[i].exTime--;
			  if( smallPlaneArray[i].exTime==0){
			  mainObj.removeChild( smallPlaneArray[i].imgNode);
			  smallPlaneArray.splice(i,1);
		      }
	    }
     }
  }			



function playerPlaneProto(imgSrc,x,y,speed){
	this.imgNode=document.createElement("img");//创建结点
	this.imgSrc=imgSrc;
	this.x=x;
	this.y=y;
	this.speed=speed;
	this.init=function(){/*初始化的方法*/
	     this.imgNode.src=this.imgSrc;
	     this.imgNode.style.position="absolute";
	     this.imgNode.style.left=this.x+"px";
		 this.imgNode.style.top=this.y+"px";
		 mainObj.appendChild(this.imgNode);//添加到舞台当中
	}
	this.init();
	this.moveLeft=function(){
		//到时候根据判断玩家的按键来执行此事件
		if(this.imgNode.style.left=="-80px"){
			this.imgNode.style.left="440px";
		}else{
		      this.imgNode.style.left=parseInt(this.imgNode.style.left)-this.speed+"px";
			
			
	       }
	   }
	this.shoot=function(){//发射子弹
		 var newBullet=new  bulletProto("images/d.jpg",parseInt(this.imgNode.style.left)+25,parseInt(this.imgNode.style.top)-10,10);		
		bulletArray.push(newBullet);	
		}
	this.moveRight=function(){
		//到时候根据判断玩家的按键来执行此事件
	if(this.imgNode.style.left=="440px"){
			this.imgNode.style.left="80px";
		}else{
		this.imgNode.style.left=parseInt(this.imgNode.style.left)+this.speed+"px";
		}
	}
	
	    this.shoot=function(){//发射子弹
		 var newBullet=new  bulletProto("images/d.jpg",parseInt(this.imgNode.style.left)+25,parseInt(this.imgNode.style.top)-10,10);		
		bulletArray.push(newBullet);	
		}
	
	
	
	this.moveUp=function(){
	
	if(this.imgNode.style.top=="0px"){
			this.imgNode.style.top="0px";
		}else{
		     this.imgNode.style.top=parseInt(this.imgNode.style.top)-this.speed+"px";
		}
	}
	    this.shoot=function(){//发射子弹
		 var newBullet=new  bulletProto("images/d.jpg",parseInt(this.imgNode.style.left)+25,parseInt(this.imgNode.style.top)-10,10);		
		bulletArray.push(newBullet);	
		}
		
	this.moveDown=function(){
		//到时候根据判断玩家的按键来执行此事件
	if(this.imgNode.style.top=="520px"){
		    this.imgNode.style.top="520px";
		}else{
		    this.imgNode.style.top=parseInt(this.imgNode.style.top)+this.speed+"px";
		}  
	}
		this.shoot=function(){//发射子弹
		 var newBullet=new  bulletProto("images/d.jpg",parseInt(this.imgNode.style.left)+25,parseInt(this.imgNode.style.top)-10,10);		
		bulletArray.push(newBullet);	
		}
		
}

    //在body中按下键盘时，移动玩家飞机
	document.body.onkeydown=function(){
		 var e=window.evevt||arguments[0];
		 if(e.keyCode==37){
			 leftBtn=true;	 
	     }
		 if(e.keyCode==38){
			 upBtn=true;	 	 
	     }
		 if(e.keyCode==39){
			 rightBtn=true;	 	 
	     }
		 if(e.keyCode==40){ 	
			 downBtn=true;	  
	     }
		  if(e.keyCode==32){ 	
			 shootBtn=true;	  
	     }
	}
	document.body.onkeyup=function(){
		 var e=window.evevt||arguments[0];
		 if(e.keyCode==37){
			 leftBtn=false;	 
	     }
		 if(e.keyCode==38){
			 upBtn=false;	 	 
	     }
		 if(e.keyCode==39){
			 rightBtn=false;	 	 
	     }
		 if(e.keyCode==40){ 	
			 downBtn=false;	  
	     }
		 if(e.keyCode==32){ 	
			 shootBtn=false;	  
	     }
	}
    function ctrlPlay(){
	     if( leftBtn==true){
		    player.moveLeft();
         }
		 if(rightBtn==true){
		    player.moveRight();
         }
		 if( upBtn==true){
		    player.moveUp();
         }
		 if(downBtn==true){
		    player.moveDown();
         }
		 if(shootBtn==true){
			 
			 player.shoot();
			 zdmusic.play();
			 
			 }
   }	

   
   
    //子弹模板
function bulletProto(imgSrc,x,y,speed){
    this.imgNode=document.createElement("img");//创建结点
	this.imgSrc=imgSrc;
	this.x=x;
	this.y=y;
	this.speed=speed;
	this.init=function(){/*初始化的方法*/
	     this.imgNode.src=this.imgSrc;
	     this.imgNode.style.position="absolute";
	     this.imgNode.style.left=this.x+"px";
		 this.imgNode.style.top=this.y+"px";
		 mainObj.appendChild(this.imgNode);//添加到舞台当中
	}
	this.init();
	this.move=function(){
	 this.imgNode.style.top=parseInt(this.imgNode.style.top)-this.speed+"px";
	}
  }  
  //子弹移动
function  bulletMove(){
	 for(var i=0;i<bulletArray.length;i++){
	      bulletArray[i].move();
		  //跑到外面就消失
		  if(parseInt(bulletArray[i].imgNode.style.top)<=-20){
			 mainObj.removeChild( bulletArray[i].imgNode);
			  bulletArray.splice(i,1);
			  
			}
	 }
}

//碰撞函数
function  crashCheck(){
	  for(var i=0;i<smallPlaneArray.length;i++){
		  for(var j=0;j<bulletArray.length;j++){ 
		  //子弹左边
		  var btLeft=parseInt(bulletArray[j].imgNode.style.left);
		   //子弹顶部
		  var btTop=parseInt(bulletArray[j].imgNode.style.top);
		  //飞机顶部
		  var plTop=parseInt( smallPlaneArray[i].imgNode.style.top);
		  //飞机左边
		  var plLeft=parseInt( smallPlaneArray[i].imgNode.style.left);
		  //如果地方小飞机还活着
		   if(smallPlaneArray[i].isDead==false){
		     if(btLeft>=plLeft&&btLeft<=plLeft+50&&btTop>=plTop&&btTop<=plTop+50){
			  //碰撞之后，移除子弹
			mainObj.removeChild(bulletArray[j].imgNode); 
			bulletArray.splice(j,1);
			//地方小飞机做一个改变，替换图片路径
			smallPlaneArray[i].imgNode.src="images/a.jpg";
			//把地方小飞机的存活状态设置为死亡(有时候，一个字母的错误，都会导致代码运行不起来)
			smallPlaneArray[i].isDead=true;
			//杀敌积分
			killNum.innerHTML=parseInt(killNum.innerHTML)+1;
			killScore.innerHTML=parseInt(killScore.innerHTML)+3;
		  }
	    } 
	  }   
   } 
}

