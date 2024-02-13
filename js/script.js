const para = document.querySelector('.para');
const header = document.querySelector('.home');

const graph = document.querySelector('.graph');

anime.timeline({loop:true})
.add({
	targets:".home",
	scale:[5,1],
	duration:6500,
	delay: function (element,i){
		return i*50;
	}
})


anime.timeline({loop:true})
.add({
	targets:".graph",
	translateY:["50px",1],
	duration:1500,
	delay: function (element,i){
		return i*50;
	}
})
anime.timeline({loop:false})
.add({
	targets:".para",
	rotate:"2turn",
	easing:'linear',
	duration:1100,
})
