console.log("script audio.js ini di jalankan")
document.getElementById("play-btn").addEventListener("click", function() {
    console.log("tombol play button di click");
    const audio = new Audio("audio/1.mp3");
audio.play();
});