// audio.js
window.onload = function() {
    // Function to play the audio
    function playJaws() {
        const audio = new Audio('/public/audio/Jaws-theme-song.mp3'); // Update the path as needed
        audio.play();
    }
    
    // Play the audio when the page loads
    playJaws();
};
