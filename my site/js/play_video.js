
// start playing the video when the play button is clicked
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function() {
        const video = this.parentElement.querySelector('video');
        video.controls = true; // Show default controls
        video.currentTime = 0;
        video.play();
        this.style.display = 'none';

        // Request fullscreen with browser compatibility
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});

// set the default frame of the video to the last frame
document.querySelectorAll('video').forEach(video => {
    // Get duration when metadata is loaded
    video.addEventListener('loadedmetadata', function() {
        // Seek to last frame
        video.currentTime = video.duration - 0.1;
    });
});

