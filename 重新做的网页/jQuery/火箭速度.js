// JavaScript Document
$(function() {
$("#gotop").click(function() {
TweenMax.to(window, 1, {scrollTo:0, ease:Expo.easeInOut});
 });});
 
function selectImg(){
	arr=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg'];
	key=Math.floor(Math.radom()*arr.length);
	val=arr[key];
	imgobj=document.getElementById('imgid');
	imgobj.src='菜鸟作品/images/one'+val;
	}
setInterval(selectImg,100);