function playBoing(){
    var boing = new Audio();
    boing.src = "boing.wav";
    document.getElementById("boing").onclick = boing.play();
}

function playFloop(){
    var floop = new Audio();
    floop.src = "floop.wav";
    document.getElementById("floop").onclick = floop.play();
}

function playBloop(){
    var bloop = new Audio();
    bloop.src = "bloop.wav";
    document.getElementById("bloop").onclick = floop.play();
}
