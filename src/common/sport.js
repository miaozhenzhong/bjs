var timer = ''
function runToTop(num){  
    var cur = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = num?(num - cur)/5:((0 - cur)/5);
    if(num){
    	if(cur>num){
    		document.body.scrollTop = document.documentElement.scrollTop = cur + speed;
    	}else{
    		window.scrollTo(num,num);  
			clearInterval(timer);
    	}
    }else{
    	if(cur>0){
    		document.body.scrollTop = document.documentElement.scrollTop = cur + speed;
    	}else{
    		window.scrollTo(num,num);  
			clearInterval(timer);
    	}
	}
}
function startMove(type){
    timer=setInterval(function(){
        runToTop(type);   
   },10);
}
  
export default startMove;


