function playBoing(){
    var boing = new Audio();
    boing.src = "boing.wav";
    boing.play();
}

function playFloop(){
    var floop = new Audio();
    floop.src = "floop.wav";
    floop.play();
}

function playBloop(){
    var bloop = new Audio();
    bloop.src = "bloop.wav";
    bloop.play();
}

document.getElementById("boing").onclick = playBoing;
document.getElementById("floop").onclick = playFloop;
document.getElementById("bloop").onclick = playBloop;
