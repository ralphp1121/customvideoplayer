const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// update play/pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Update progress & timesteamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    // The reason why you have to check is less than "10" is for the format of seconds to have like; 01, 02, 03, ... instead of 0,1,2,3... 
    // Thus if it's less than 10 then you have to append "0" in front
    if (mins < 10) {
        mins = 0 + String(mins);
    }

    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    // Similarly for the minutes if its less than 10, then you will have to append "0" 
    if (secs < 10) {
        secs = '0'+ String(secs);
    }

    //Using template literals "${}" in Javascript >>> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);