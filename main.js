//http://www.html5canvastutorials.com/advanced/html5-canvas-animation-stage/
// window.requestAnimFrame = (function(callback) {
//         return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//         function(callback) {
//           window.setTimeout(callback, 1000 / 60);
//         };
//       })();
var arrows;
var bows;
var targets;
var targetstwo;
var blood,bloodd;




var myGameArea={};
myGameArea["canvas"]=document.getElementById("GameArea");
myGameArea["start"]=function(){
	this.context=this.canvas.getContext("2d"),
	this.interval=setInterval(updateGame,50);
}
myGameArea["clear"]=function(){

}
var startGame=function(){
	console.log("hey")
	myGameArea.start();
	arrows=new arrow(100,500,"arrow.png",100,10,"image");
	bows=new bow(120,405,"bow.png",75,200,"image");
	targets=new target(1000,500,"target.png",300,200,"image");
	targetstwo=new target(1000,75,"target2.png",200,200,"image");
	blood=new target(1000,500,"blood.png",200,200,"image");
	bloodd=new target(1000,75,"blood.png",200,200,"image");


}
var arrow=function(x,y,src,width,height,type){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.image=new Image();
	this.image.src=src;
	this.aupdate=function(){
		var ctx=myGameArea.context;
		ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

	};

}
var bow=function(x,y,src,width,height,type){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.image=new Image();
	this.image.src=src;
	this.bupdate=function(){
		var ctx=myGameArea.context;
		ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

	};

}
var target=function(x,y,src,width,height,type){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.image=new Image();
	this.image.src=src;
	this.tupdate=function(){
		var ctx=myGameArea.context;
		ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

	};
}

var updateGame=function(){
	console.log("hiiiii")
arrows.aupdate();
bows.bupdate();
targets.tupdate();
targetstwo.tupdate();
blood.tupdate();
}

