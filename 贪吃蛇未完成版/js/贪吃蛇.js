// JavaScript Document
//把地图对象全局化，方便之后访问,防止被污染
var map;
var food;
var snake;
//1.定义地图类
function Map(){
	//4.定义相关属性	
	this.width=1000;
	this.height=800;
	this.color='#5F7BE5';
	this.position='absolute';
	//定义一个公有属性，用于获取地图的div元素
	this._map=null;
	//5.定义相关方法
	this.show=function (){
		//创建一个div元素
		this._map=document.createElement('div');
		//定义相关属性	
		this._map.style.width=this.width+'px';
		this._map.style.height=this.height+'px';
		this._map.style.backgroundColor=this.color;
		this._map.style.position=this.position;
		//追加div元素到body元素中
		document.getElementsByTagName('body')[0].appendChild(this._map);
		
		}
}
//2.定义食物类
function Food(){
    //7.定义相关属性	
	this.width=40;
	this.height=40;
	this.color='black';
	this.position='absolute';
	this.x=0;
	this.y=0;
	//定义一个属性，用于接受div元素，防止多次创建食物
	this._food=null;
	//8.定义相关方法
	this.show=function (){
		if(this._food==null){
		//创建一个div元素
		this._food=document.createElement(this._food);
		//定义相关属性	
		this._food.style.width=this.width+'px';
		this._food.style.height=this.height+'px';
		this._food.style.backgroundColor=this.color;
		this._food.style.position=this.position;
		//把食物显示在地图上
		map._map.appendChild(this._food);
		}
		//随机改变坐标
		this.x=Math.floor(Math.random()*25);
	    this.y=Math.floor(Math.random()*20);
		this._food.style.left=this.x*40+'px';
		this._food.style.top=this.y*40+'px';
		
		}
}	
//3.定义蛇类
function Snake(){
	//9.定义相关属性	
	this.width=40;
	this.height=40;
	this.position='absolute';
	//定义蛇的默认方向
	this.direct='right';
	//定义蛇节，用null解决蛇身不断伸长的问题
	this.body=[[3,2,'red',null],[2,2,'blue',null],[1,2,'blue',null]];
	//8.定义相关方法
	this.show=function (){
		//获取蛇节的长度
		var length=this.body.length;
		for(var i=0;i<length;i++){
			if(this.body[i][3]==null){
			//创建一个div元素
		     this.body[i][3]=document.createElement('div');
			 //定义相关属性	
		     this.body[i][3].style.width=this.width+'px';
		     this.body[i][3].style.height=this.height+'px';
		     this.body[i][3].style.backgroundColor=this.body[i][2];
			 this.body[i][3].style.position=this.position;
			 this.body[i][3].style.left=this.body[i][0]*40+'px';
		     this.body[i][3].style.top=this.body[i][1]*40+'px';
			 //追加div元素到在地图上,写到下面的括号里，只会出现一个蓝色的蛇节，如果出现在外面的括号，则不会出现
			 map._map.appendChild(this.body[i][3]);
			}
			//每次调用show方法是，如果创建了蛇身只需要改变元素的坐标即可
			 this.body[i][3].style.left=this.body[i][0]*40+'px';
		     this.body[i][3].style.top=this.body[i][1]*40+'px';
		}
	}
	    //定义一个setDirect方法，判断运动方向
		this.setDirect=function (code){
		     switch(code){
			      case 37:
				       this.direct='left';
			      break;
				  case 38:
				       this.direct='up';
			      break;
				  case 39:
				       this.direct='right';
			      break;
				  case 40:
				       this.direct='down';
			      break;  	 
			 }
		
		}
		
		//定义一个move方法，让蛇运动起来
		this.move=function (){
			//判断蛇是否吃到食物
			if(this.body[0][0]==food.x &&this.body[0][1]==food.y){
			//代表吃到食物
			    this.body.push([0,0,'blue',null]);
		    //吃到食物后食物随机重新显示
			food.show();
			}
			var length=this.body.length;
			//交换除蛇头以外的其他坐标
			for(var i=length-1;i>0;i--){
				this.body[i][0]=this.body[i-1][0];
				this.body[i][1]=this.body[i-1][1];
				}
			//判断蛇头运动方向
			if(this.direct=='right'){
				this.body[0][0]+=1;
				}
			if(this.direct=='left'){
				this.body[0][0]-=1;
				}
			if(this.direct=='up'){
				this.body[0][1]-=1;
				}
			if(this.direct=='down'){
				this.body[0][1]+=1;
				}
				//重新显示蛇节
				this.show();
		}	
		 if(this.body[0][0]<0||this.body[0][0]>=map.width/this.width||this.body[0][1]<0||this.body[0][1]>=map.height/this.height){
        alert('game over');
        clearInterval(timer);
        return ;
      }
      //判断是否撞到自身
      for(var i=1;i<this.body.length;i++){
        if(this.body[0][0]==this.body[i][0]&&this.body[0][1]==this.body[i][1]){
          alert('game over');
          clearInterval(timer);
          return ;
        }
      }

		
			
}
	//6.定义window.onload页面载入事件	 
	window.onload=function (){
		//实例化Map对象
		map=new Map();
		//调用show方法显示地图
		map.show();
		//实例化食物对象
		food=new Food();
		food.show();
		//实例化蛇类对象
		snake=new Snake();
		snake.show();
		//使用定时器
		setInterval('snake.move()',200);
		
		document.onkeydown=function (){
			var code;
			if(window.event){
				code=window.event.keyCode;
			}else{
				code=event.keyCode;
			}
			snake.setDirect(code);
		}
	}















