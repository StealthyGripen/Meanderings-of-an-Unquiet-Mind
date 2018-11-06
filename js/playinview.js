
//Create variables
var audio;

//Initialize audioplayer
function initAudioPlayer() {
    //Create new audio instance
    audio = new Audio();
    //Link in MP3 audio file
    audio.src = "audio/Same_days_Blear_Moon.mp3";
    //Set audio to loop
    audio.loop = true;
    // //Set audio to play on load
    // audio.play();

}
//Load audio player on window load
window.addEventListener("load", initAudioPlayer);

// Page 1
inView('.page-1')
    .on('enter', el => {
        //Set muted to false
        audio.muted = false;
    })
    .on('exit', el => {
        //Set muted to true
        audio.muted = true;

    });