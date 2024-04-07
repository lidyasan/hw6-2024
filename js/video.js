var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Play Video");
	video.play == true
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Pause Video")
	if (video.paused == false) {
		video.pause();
	}
})

//slow down
document.querySelector("#slower").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Slow Down")
	video.playbackRate = (video.playbackRate * .9);
	console.log("Current speed is set to " + video.playbackRate)
})

//speed up
document.querySelector("#faster").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("speed up")
	video.playbackRate = (video.playbackRate * 1.11);
	console.log("Current speed is set to " + video.playbackRate)
})

//skip ahead

document.querySelector("#skip").addEventListener("click", function () {
	video = document.querySelector("#player1")
	console.log("Skip Ahead in Video")
	video.currentTime = (video.currentTime + 10);
	if (video.currentTime == video.duration) { //this doesnt work
		video.currentTime = 0
	}
	console.log("Current time is set to: " + video.currentTime)
})

//mute

document.querySelector("#mute").addEventListener("click", function () {
	video = document.querySelector("#player1")
	// video=document.querySelector("#player1")
	console.log("Mute Video")
	if (video.muted == false) {
		video.muted = true;
		const mute = document.getElementById("mute");
		mute.innerHTML = "Unmute";
	} else {
		video.muted = false;
		const mute = document.getElementById("mute");
		mute.innerHTML = "Mute";
	}

	console.log("Mute is set to " + video.muted)
})

//volume slider
document.querySelector("#slider").addEventListener("change", function () {
	video = document.querySelector("#player1")
	console.log("Sliding Volume")
	video.volume = slider.value / 100;
	// let num = document.getElementById('#volume');
	// vol.innerHTML = vol + "%";
	const volume = document.getElementById("volume");
	volume.innerHTML = video.volume * 100 + "%";


})


//styled
document.querySelector("#vintage").addEventListener("click", function () {
	video = document.querySelector("#player1")
	video.classList.add("oldSchool");
	console.log("Old School")
})

//original

document.querySelector("#orig").addEventListener("click", function () {
	video = document.querySelector("#player1")
	video.classList.remove("oldSchool");
	console.log("Original")
})
