function playBoing(){
    var boing = new Audio();
    boing.src = "boing.wav";
    boing.play();
}
document.getElementById("boing").onclick = playBoing;

function playFloop(){
    var floop = new Audio();
    floop.src = "floop.wav";
    floop.play();
}
document.getElementById("floop").onclick = playFloop;

function playBloop(){
    var bloop = new Audio();
    bloop.src = "bloop.wav";
    bloop.play();
}
document.getElementById("bloop").onclick = playBloop;
