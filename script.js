
const button = document.getElementById('movingButton');
let audio = document.getElementById("myAudio");
const video = document.getElementById("myVideo");

function playAudio() {
    let audio = document.getElementById("myAudio");
    audio.play();   
    let loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("hide");
    setTimeout(() => {
        loadingScreen.style.display = "none";
        document.getElementById("main-content").style.display = "flex";
    }, 350);
}




button.addEventListener('mouseenter', () => {

        const newTop = Math.random() * (window.innerHeight - 50) + "px";
        const newLeft = Math.random() * (window.innerWidth - 100) + "px";
        button.style.top = newTop;
        button.style.left = newLeft;

});

function redirectToVideo() {
    window.location.href = "video.html"; 
}


