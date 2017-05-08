let clockFunction = (function(){
  	var instance;
  	function init(){
   const secondHand = document.querySelector('.second-hand');
   const minHand = document.querySelector('.min-hand');
   const hourHand = document.querySelector('.hour-hand');
   function getSecond(){
   	let time = new Date();
   	let second = time.getSeconds();
  	const secondDegress = ((second/60) * 360) +90;
  	secondHand.style.transform = `rotate(${secondDegress}deg)`;
   }
   function getMinutes(){
   	let time = new Date();
   	let min = time.getMinutes();
  	let minuteDegrees = ((min/60)*360)+90;
  	minHand.style.transform = `rotate(${minuteDegrees}deg)`;
   }
   function getHours(){
   	let time = new Date();
   	const hour = time.getHours();
   	const hourDegrees = ((hour/12)*360)+90;
  	hourHand.style.transform = `rotate(${hourDegrees}deg)`
   }
   function clockWorking(){
   		getSecond();
   		getMinutes();
   		getHours();
   }
   function clockInterval(x,y){
   	setInterval(x,y);
   }
   clockInterval(clockWorking,1000);
   return{
   	clockWorking:clockWorking
   }
  	}
  	return{
  		getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
  	}
  })();




clockFunction.getInstance();

