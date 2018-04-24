// JavaScript Document
 
 
//1 先获取到所有的坑(图片)
var content = document.getElementById('content');
var cover = document.getElementById('cover');
var image = document.getElementsByTagName('img');
var countMouse = document.getElementById('count');
var score = countMouse.querySelector(".score");
var history = document.getElementById("history");
var score1 = document.getElementById("score1");
var div = document.querySelector(".clock");
var text = document.getElementById("text");
var preScore = 0;
var ranK;
var count = 0;
 
// localStorage.removeItem("bestScore");
// localStorage.removeItem("scoreshow");
 
preScore = localStorage.getItem("bestScore");
console.log(preScore);
score1.innerHTML = preScore;
 
//让老鼠随机出现在一个坑里
setTimeout("chulai()",Math.random()*400+800);
 
 
function chulai(){
 try{
 ranK = Math.floor(Math.random() * 9);
 image[ranK].src ="images/地鼠.jpg";
 image[ranK].style.marginTop = "0px";
 image[ranK].setAttribute("onclick","die()");
 setTimeout("paole()", Math.random()*400+800);
 }catch(ex){}
}
//2 老鼠回去了
function paole(){
 try{
 image[ranK].src ="images/坑.jpg";
 image[ranK].style.marginTop = "31px";
 image[ranK].removeAttribute("onclick");
 setTimeout("chulai()", Math.random()*400+800);
 }catch(ex){}
}
//3 老鼠被打死了
 
function die(){
 try{
 image[ranK].src ="images/受伤.jpg";
 image[ranK].removeAttribute("onclick");
 image[ranK].style.marginTop = "3px";
 count++;
 score.innerHTML =count;
 
 if( count > preScore)
 {
  score1.innerHTML = count;
  preScore = count;
 }
 localStorage.setItem("bestScore",preScore);
 }catch(ex){
 
 }
}
 
//设置一个定时器
var seconds = 59;
var speed = 1000;
 
 
function countDown(seconds,speed){
  var txt = "剩余时间：" + ((seconds < 10) ? "0" + seconds : seconds) +"秒";
  div.innerHTML = txt;
  var timeId = setTimeout("countDown(seconds--,speed)",speed);
  if(seconds == 0){
   //localStorage.setItem("scoreshow",count);
   localStorage.setItem("bestScore",preScore);
 
   clearTimeout(timeId);
   if(cover.style.display == "none"){
    cover.style.display = "block";
   if(count === undefined)
    text.innerHTML = "当前成绩为："+0+"分"+"<br/>"+"游戏结束！";
 
   else if(count == localStorage.getItem("bestScore")){
    text.innerHTML = "当前成绩为："+count+"分"+"<br/>"+"恭喜您打破纪录"+"<br/>"+"游戏结束！";
    }
   else
    text.innerHTML = "当前成绩为："+count+"分"+"<br/>"+"游戏结束！";
    } 
   }
 
}
countDown(seconds,speed);