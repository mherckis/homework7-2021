var video = document.querySelector('#player1');
var volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Play
document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video");
	 video.play()
	 document.getElementById('volume').innerHTML=video.volume*100+'%';
 });

 //Pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate-=0.05;
	console.log("The new speed is:" + video.playbackRate);
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate+=0.05;
	console.log("The new speed is:" + video.playbackRate);
});

// Skip Ahead
document.querySelector('#skip').addEventListener("click", function(){
	console.log(video.currentTime);
	video.currentTime+=15;

	if (video.currentTime>=video.duration){
		video.currentTime=0;
		console.log(video.currentTime);
	}
});

//Mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");

	if(video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute"
	}

	else{
		video.muted=true;
		document.getElementById("mute").innerHTML="Unmute"
	}
});

//Slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.getElementById("volume").innerHTML=this.value+"%"
});

//Add Old School
document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Old School');
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log('Original');
	video.classList.remove('oldSchool')
});